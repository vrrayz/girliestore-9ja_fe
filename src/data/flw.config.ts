const flwConfig = {
  public_key: `${process.env.NEXT_PUBLIC_FLW_PUBLIC}`,
  tx_ref: `GS9ja-${new Date().getTime()}`,
  currency: "NGN",
  payment_options: "card,mobilemoney,ussd",
  customizations: {
    title: "my Payment Title",
    description: "Payment for items in cart",
    logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
  },
};
// ********** REQUIRED FIELDS **************
// amount: number;
//   customer: {
//     email: string,
//     phone_number: string,
//     name: string,
//   },
export default flwConfig;
