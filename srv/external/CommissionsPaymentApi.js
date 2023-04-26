const cds = require("@sap/cds");
const res = require("express/lib/response");

class CommissionsPaymentApi extends cds.RemoteService {
  async init() {
    this.reject(["CREATE", "UPDATE", "DELETE"], "*");

    this.before("READ", "*", (req) => {
      try {
        req.query = `GET /payments(26177172834098009)`;
        //req.query = `GET /salesOrders`;
      } catch (error) {
        req.reject(400, error.message);
      }
    });

    this.on("READ", "*", async (req, res) => {
      const response = await res(req);
      console.log(response);
      console.log(response.value.unitType.name);
      //return response;
      return parseResponse(response);
    });

    super.init();
  }
}

function parseResponse(response) {
  return {
    // payments : response.payments
    paymentSeq: response.paymentSeq,
    reason: response.reason,
    period: response.period,
    postPipelineRun: response.postPipelineRun,
    earningCodeId: response.earningCodeId,
    earningGroupId: response.earningGroupId,
    payee: response.payee,
    position: response.position,

    //value: response.value,

  };
}

module.exports = CommissionsPaymentApi;
