import * as remitanoClient from './utils/remitano-client';

export interface Context {
  remitanoClient: typeof remitanoClient;
}

export default () => ({
  remitanoClient,
});
