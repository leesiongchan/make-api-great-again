import * as hmacAdapter from 'axios-adapter-hmac';
import * as qs from 'qs';
import * as url from 'url';
import axios from 'axios';

const END_POINT = 'https://api.remitano.com/api/v1';

function buildCanonicalUrl(request, hash, timestamp) {
  const method = request.method.toUpperCase();
  const contentType = request.headers['Content-Type'];
  const parsedUrl = url.parse(request.url);
  const uri = `${parsedUrl.path}${parsedUrl.hash || ''}`;

  return `${method},${contentType},${hash},${uri},${timestamp}`;
}

function stringifyQuery(query) {
  if (!query) {
    return '';
  }

  return qs.stringify(query, { addQueryPrefix: true });
}

const axiosAdapter = hmacAdapter(axios, {
  algorithm: 'sha1',
  scheme: {
    sign({ request, schemeConfig, hash, hmac }) {
      const message = JSON.stringify(request.data || '');
      const timestamp = new Date().toUTCString();
      const hashDigest = hash(message);
      const canonicalUrl = buildCanonicalUrl(request, hashDigest, timestamp);
      const signature = hmac(canonicalUrl, schemeConfig.privateKey);

      request.headers.Date = timestamp;
      request.headers.Authorization = `APIAuth ${
        schemeConfig.publicKey
      }:${signature}`;
      request.headers['Content-MD5'] = hashDigest;
    },
  },
  schemeConfig: {
    privateKey: process.env.REMITANO__API_SECRET,
    publicKey: process.env.REMITANO__API_KEY,
  },
  signatureEncoding: 'base64',
});

const axiosInstance = axios.create({
  adapter: axiosAdapter,
  baseURL: END_POINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Public APIs
export function exchangeRates() {
  return axiosInstance.get('/rates/exchange');
}

export function publicOffers(params) {
  return axiosInstance.get(`/offers${stringifyQuery(params)}`);
}

// Private APIs
export function user(userId, params) {
  return axiosInstance.get(`/users/${userId}${stringifyQuery(params)}`);
}

export function me(params) {
  return user('me', params);
}
