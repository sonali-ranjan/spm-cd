const cds = require("@sap/cds");

module.exports = cds.service.impl(function () {
  const { CurrentSalesOrder } = this.entities;

  this.on("READ", CurrentSalesOrder, async (req) => {
    const CommissionsApi = await cds.connect.to("CommissionsApi");
    return CommissionsApi.tx(req).run(req.query);
  });

});