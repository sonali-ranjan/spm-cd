const cds = require("@sap/cds");

module.exports = cds.service.impl(function () {
  const { SalesOrders } = this.entities;
  const { FinalPayments } = this.entities;
  this.on("READ", SalesOrders, async (req) => {
    console.log("BeGN");
    console.log(req);
    const CommissionsApi = await cds.connect.to("CommissionsApi");
    return CommissionsApi.tx(req).run(req.query);

  }); 
  // const { FinalPayments } = this.entities;

  // this.on("READ", FinalPayments, async (req) => {

  //   console.log("test final payment");

  //   console.log(SELECT.from(FinalPayments));

  // });
  // const { Payment } = this.entities;

  // this.on("READ", 'Payments', async (req) => {
  //   console.log(req);
  //   const CommissionsOdataApi = await cds.connect.to("CommissionsOdataApi");
  //   return CommissionsOdataApi.tx(req).run(req.query);
  // });

  this.on("sendPayment", async (req) => {

    //  Get Payments List
    //  Read Participant details
    //  Read Position details
    //  Read Customizing mapping tables
    //  Read Customizing Insurance Objects
    //  Prepare CD input
    //  Post to CD payment
    //    postPaymentToCD();


    const result = await readSAPCommissionPayments(req);

    return true;
  });
  async function readSAPCommissionPayments(req) {
    const CommissionsOdataApi = await cds.connect.to("CommissionsOdataApi");

    let res = await CommissionsOdataApi.read('Payments')//.limit(1)

    res.forEach(element => {

      // console.clear();
      console.log("Data for Payment to CD\n");
      console.log("Payment Seq      : ", element.PaymentSeq);
      console.log("Earning Group ID : ", element.EarningGroupId);
      console.log("Earning Code Id  : ", element.EarningCodeId);
      console.log("Payment Amount   : ", element.Value.Value, element.Value.UnitType);
      console.log("Payee ID         : ", element.Payee.PayeeId);
      console.log("Payee Seq        : ", element.Payee.PayeeSeq);
      console.log("Payment Date     : ", element.Period.EndDate);
      console.log("Position Name    : ", element.Position.Name);
      console.log("Position Seq     : ", element.Position.RuleElementOwnerSeq);

      cds.run(INSERT.into(FinalPayments).entries(
        {
          PaymentSeq: element.PaymentSeq,
          EarningGroup: element.EarningGroupId,
          EarningCode: element.EarningCodeId,
          Currency: element.Value.UnitType,
          Amount: element.Value.Value,
          PayeeSeq: element.Payee.PayeeSeq,
          PostingDate: element.Period.EndDate,
          PositionSeq: element.Position.RuleElementOwnerSeq,
          Tenant: "1270"
        }
      ));

      return res.Payments;

    })
  }
});
