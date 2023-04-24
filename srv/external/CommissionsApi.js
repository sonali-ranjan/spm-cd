const cds = require("@sap/cds");

class CommissionsApi extends cds.RemoteService {
  async init() {
    this.reject(["CREATE", "UPDATE", "DELETE"], "*");

    this.before("READ", "*", (req) => {
      try {
        req.query = `GET /salesOrders(14355223812243766)`;
      } catch (error) {
        req.reject(400, error.message);
      }
    });

    this.on("READ", "*", async (req, next) => {
      const response = await next(req);
      return parseResponse(response);
    });
    super.init();
  }
}

function parseResponse(response) {
  return {
    orderId: response.salesOrderSeq,
    name: response.orderId
  };
}

module.exports = CommissionsApi;
