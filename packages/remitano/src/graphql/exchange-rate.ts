import { objectType, queryField } from 'yoga';

export const ExchangeRate = objectType({
  name: 'ExchangeRate',
  definition(t) {
    t.id('name');
    t.string('value');
  },
});

///> Queries
export const ExchangeRateListQuery = queryField('exchangeRates', {
  type: 'ExchangeRate',
  list: true,
  async resolve(root, args, ctx) {
    const { data: exchangeRates } = await ctx.remitanoClient.exchangeRates();

    return Object.keys(exchangeRates).map((name) => ({
      name,
      value: exchangeRates[name],
    }));
  },
});
///< Queries
