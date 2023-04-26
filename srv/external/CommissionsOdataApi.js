const cds = require("@sap/cds");

class CommissionsOdataApi extends cds.RemoteService {
  async init() {
    this.reject(["CREATE", "UPDATE", "DELETE"], "*");

    this.before("READ", "*", (req) => {
      try {
         //req.query = `GET /salesOrders(14355223812244865)`;
        req.query = `GET /Payments`;
      } catch (error) {
        req.reject(400, error.message);
      }
    });

    this.on("READ", "*", async (req, next) => {
      const response = await next(req);
      console.log(response);
      return response;
      //return parseResponse(response);

    });
    super.init();
  }
}

function parseResponse(response) {
  return {

    Payment: response.Payment
    //orderId: response.salesOrderSeq,
    //name: response.orderId,
    //businessUnits : response.businessUnits,
    //businessUnits : response.businessUnits

  };
}

module.exports = CommissionsOdataApi;
