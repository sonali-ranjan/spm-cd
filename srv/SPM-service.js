const cds = require("@sap/cds");

module.exports = cds.service.impl(function () {
  const { SalesOrders } = this.entities;

  this.on("READ", SalesOrders, async (req) => {
    console.log("BeGN");
    console.log(req);
    const CommissionsApi = await cds.connect.to("CommissionsApi");
    return CommissionsApi.tx(req).run(req.query);

  });
  const { FinalPayments } = this.entities;

  this.on("READ", FinalPayments, async (req) => {

  console.log("test final payment");

  });
  // const { Payment } = this.entities;

  // this.on("READ", 'Payments', async (req) => {
  //   console.log(req);
  //   const CommissionsOdataApi = await cds.connect.to("CommissionsOdataApi");
  //   return CommissionsOdataApi.tx(req).run(req.query);
  // });

  this.on("sendPayment", async (req) => {

    //  Get Payments List
    //  Get Payment by ID
    //  Get Period Details
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
    // ?$expand=Position,Payee,Period';
    //CommissionsOdataApi.
    let res = await CommissionsOdataApi.read('Payments').limit(1) //having('?$expand=Position,Payee,Period').limit(10)

    res.forEach(element => {
      // console.log(element);

      console.log(element.PaymentSeq);
      console.log(element.EarningGroupId);
      console.log(element.EarningCodeId);
      console.log(element.Value.UnitType);
      console.log(element.Value.Value);

      // PayeeId: 
      console.log(element.Payee.PayeeId);
      console.log(element.Payee.PayeeSeq);
      // EndDate: 
      console.log(element.Period.EndDate);
      // Name: 
      console.log(element.Position.Name);
      console.log(element.RuleElementOwnerSeq);
      //write this to a local entity/table in db

    });
    return res.Payments;

  }
});


