import { objectType, queryField, enumType, stringArg } from 'yoga';

export const OfferTypeEnum = enumType({
  name: 'OfferTypeEnum',
  members: ['buy', 'sell'],
});

export const Offer = objectType({
  name: 'Offer',
  definition(t) {
    t.id('id');
    t.boolean('disabled');
    t.boolean('has_fiat_balance');
    t.boolean('off1', { nullable: true });
    t.boolean('off2', { nullable: true });
    t.boolean('on1', { nullable: true });
    t.boolean('on2', { nullable: true });
    t.boolean('require_verified_buyer', { nullable: true });
    t.boolean('scheduled');
    t.boolean('site_country_strict');
    t.boolean('taker_warnings', { nullable: true });
    t.field('offer_type', { type: 'OfferTypeEnum' });
    t.float('buyer_trust_score', { nullable: true });
    t.float('seller_trust_score', { nullable: true });
    t.int('seller_released_trades_count', { nullable: true });
    t.string('bank_name');
    t.string('canonical_name');
    t.string('coin_currency');
    t.string('counter_offer_type');
    t.string('country_code');
    t.string('country_name');
    t.string('currency');
    t.string('last_online_all');
    t.string('last_online_type');
    t.string('max_amount');
    t.string('max_coin_price', { nullable: true });
    t.string('min_amount');
    t.string('min_coin_price', { nullable: true });
    t.string('payment_description');
    t.string('payment_method');
    t.string('payment_time');
    t.string('price');
    t.string('reference_exchange');
    t.string('username');
  },
});

///> Queries
export const OfferListQuery = queryField('offers', {
  type: 'Offer',
  args: {
    offer_type: stringArg(),
  },
  list: true,
  async resolve(root, args, ctx) {
    const {
      data: { offers },
    } = await ctx.remitanoClient.publicOffers(args);

    return offers;
  },
});
///< Queries
