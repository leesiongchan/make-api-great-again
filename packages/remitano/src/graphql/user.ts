import { objectType, queryField } from 'yoga';

export const PaymentDetails = objectType({
  name: 'PaymentDetails',
  definition(t) {
    t.id('name');
    t.string('bank_name');
    t.string('bank_account_number', { nullable: true });
  },
});

export const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id');
    t.boolean('authenticator_enabled');
    t.boolean('touch_id_enabled');
    t.field('recent_payment_details', {
      type: 'PaymentDetails',
      list: true,
      resolve(root) {
        return Object.keys(root.recent_payment_details).map((name) => ({
          name,
          ...root.recent_payment_details[name],
        }));
      },
    });
    t.int('active_trades_count');
    t.string('authenticator_removal_delay');
    t.string('authenticator_removal_time', { nullable: true });
    t.string('country_code');
    t.string('created_at');
    t.string('email');
    t.string('first_name');
    t.string('lang');
    t.string('name');
    t.string('username');
  },
});

///> Queries
export const MeQuery = queryField('me', {
  type: 'User',
  async resolve(root, args, ctx) {
    const { data: me } = await ctx.remitanoClient.me(args);

    return me;
  },
});
///< Queries
