/**
 * This file was automatically generated by Nexus 0.11.3
 * Do not make changes to this file directly
 */

import * as ctx from "../src/context"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  OfferTypeEnum: "buy" | "sell"
}

export interface NexusGenRootTypes {
  ExchangeRate: { // root type
    name: string; // ID!
    value: string; // String!
  }
  Offer: { // root type
    bank_name: string; // String!
    buyer_trust_score?: number | null; // Float
    canonical_name: string; // String!
    coin_currency: string; // String!
    counter_offer_type: string; // String!
    country_code: string; // String!
    country_name: string; // String!
    currency: string; // String!
    disabled: boolean; // Boolean!
    has_fiat_balance: boolean; // Boolean!
    id: string; // ID!
    last_online_all: string; // String!
    last_online_type: string; // String!
    max_amount: string; // String!
    max_coin_price?: string | null; // String
    min_amount: string; // String!
    min_coin_price?: string | null; // String
    off1?: boolean | null; // Boolean
    off2?: boolean | null; // Boolean
    offer_type: NexusGenEnums['OfferTypeEnum']; // OfferTypeEnum!
    on1?: boolean | null; // Boolean
    on2?: boolean | null; // Boolean
    payment_description: string; // String!
    payment_method: string; // String!
    payment_time: string; // String!
    price: string; // String!
    reference_exchange: string; // String!
    require_verified_buyer?: boolean | null; // Boolean
    scheduled: boolean; // Boolean!
    seller_released_trades_count?: number | null; // Int
    seller_trust_score?: number | null; // Float
    site_country_strict: boolean; // Boolean!
    taker_warnings?: boolean | null; // Boolean
    username: string; // String!
  }
  PaymentDetails: { // root type
    bank_account_number?: string | null; // String
    bank_name: string; // String!
    name: string; // ID!
  }
  Query: {};
  User: { // root type
    active_trades_count: number; // Int!
    authenticator_enabled: boolean; // Boolean!
    authenticator_removal_delay: string; // String!
    authenticator_removal_time?: string | null; // String
    country_code: string; // String!
    created_at: string; // String!
    email: string; // String!
    first_name: string; // String!
    id: string; // ID!
    lang: string; // String!
    name: string; // String!
    touch_id_enabled: boolean; // Boolean!
    username: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  OfferTypeEnum: NexusGenEnums['OfferTypeEnum'];
}

export interface NexusGenFieldTypes {
  ExchangeRate: { // field return type
    name: string; // ID!
    value: string; // String!
  }
  Offer: { // field return type
    bank_name: string; // String!
    buyer_trust_score: number | null; // Float
    canonical_name: string; // String!
    coin_currency: string; // String!
    counter_offer_type: string; // String!
    country_code: string; // String!
    country_name: string; // String!
    currency: string; // String!
    disabled: boolean; // Boolean!
    has_fiat_balance: boolean; // Boolean!
    id: string; // ID!
    last_online_all: string; // String!
    last_online_type: string; // String!
    max_amount: string; // String!
    max_coin_price: string | null; // String
    min_amount: string; // String!
    min_coin_price: string | null; // String
    off1: boolean | null; // Boolean
    off2: boolean | null; // Boolean
    offer_type: NexusGenEnums['OfferTypeEnum']; // OfferTypeEnum!
    on1: boolean | null; // Boolean
    on2: boolean | null; // Boolean
    payment_description: string; // String!
    payment_method: string; // String!
    payment_time: string; // String!
    price: string; // String!
    reference_exchange: string; // String!
    require_verified_buyer: boolean | null; // Boolean
    scheduled: boolean; // Boolean!
    seller_released_trades_count: number | null; // Int
    seller_trust_score: number | null; // Float
    site_country_strict: boolean; // Boolean!
    taker_warnings: boolean | null; // Boolean
    username: string; // String!
  }
  PaymentDetails: { // field return type
    bank_account_number: string | null; // String
    bank_name: string; // String!
    name: string; // ID!
  }
  Query: { // field return type
    exchangeRates: NexusGenRootTypes['ExchangeRate'][]; // [ExchangeRate!]!
    me: NexusGenRootTypes['User']; // User!
    offers: NexusGenRootTypes['Offer'][]; // [Offer!]!
  }
  User: { // field return type
    active_trades_count: number; // Int!
    authenticator_enabled: boolean; // Boolean!
    authenticator_removal_delay: string; // String!
    authenticator_removal_time: string | null; // String
    country_code: string; // String!
    created_at: string; // String!
    email: string; // String!
    first_name: string; // String!
    id: string; // ID!
    lang: string; // String!
    name: string; // String!
    recent_payment_details: NexusGenRootTypes['PaymentDetails'][]; // [PaymentDetails!]!
    touch_id_enabled: boolean; // Boolean!
    username: string; // String!
  }
}

export interface NexusGenArgTypes {
  Query: {
    offers: { // args
      offer_type: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "ExchangeRate" | "Offer" | "PaymentDetails" | "Query" | "User";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "OfferTypeEnum";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}