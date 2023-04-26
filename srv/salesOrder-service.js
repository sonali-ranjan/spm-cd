const cds = require("@sap/cds");

module.exports = cds.service.impl(function () {
  const { SalesOrders } = this.entities;

  this.on("READ", SalesOrders, async (req) => {
    console.log("BeGN");
    console.log(req);
    const CommissionsApi = await cds.connect.to("CommissionsApi");
    return CommissionsApi.tx(req).run(req.query);

  });

  const { Payment } = this.entities;

  this.on("READ", 'Payments', async (req) => {
    console.log(req);
    const CommissionsOdataApi = await cds.connect.to("CommissionsOdataApi");
    return CommissionsOdataApi.tx(req).run(req.query);
  });

  const { payments } = this.entities;

  // this.on("READ", payments, async (req) => {
  //   const CommissionsPaymentApi = await cds.connect.to("CommissionsPaymentApi");
  //   return CommissionsPaymentApi.tx(req).run(req.query);
  // });

  this.on("getRandomSalesOrder", async (req) => {
    const CommissionsApi = await cds.connect.to("CommissionsApi");
    return CommissionsApi.tx(req).run(req.query);
  });

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


    console.log("send payment");
    const result = await readSAPCommissionPayments(req);
    console.log("test");
    return true;
  });
  async function readSAPCommissionPayments(req) {
    console.log(req);
    const req1 = req;
    req.path = 'srv.SalesOrderService.SalesOrders';
    req.entity = 'srv.SalesOrderService.SalesOrders';
    console.log(req);

    const CommissionsOdataApi = await cds.connect.to("CommissionsOdataApi");
    let test1 = await CommissionsOdataApi.read('Payments').limit(1)


    
    const test = await CommissionsOdataApi.tx(req).run(req.query)
    return test;
    
    console.log(CommissionsOdataApi.read("Payment"));
    console.log("read SC fn");
    //console.log(response);
    console.log(req);
  }
});


