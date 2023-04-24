const cds = require("@sap/cds");

module.exports = cds.service.impl(function () {
  const { SalesOrders } = this.entities;

  this.on("READ", SalesOrders, async (req) => {
    const CommissionsApi = await cds.connect.to("CommissionsApi");
    return CommissionsApi.tx(req).run(req.query);
  });

  this.on("getRandomSalesOrder", async (req) => {
    const CommissionsApi = await cds.connect.to("CommissionsApi");
    return CommissionsApi.tx(req).run(req.query);
  });

});