const cds = require("@sap/cds");

class CommissionsOdataApi extends cds.RemoteService {
  async init() {
    this.reject(["CREATE", "UPDATE", "DELETE"], "*");

    this.before("READ", "*", (req) => {
      try {
        // req.query = `GET /Payments?$expand=Position,Payee,Period`;
        req.query = `GET /Payments?$expand=Position,Payee,Period&$filter=PaymentSeq eq 26177172834114509`;
       
      } catch (error) {
        req.reject(400, error.message);
      }
    });

    this.on("READ", "*", async (req, next) => {
      const response = await next(req);
     // console.log(response);
      return response;
    });
    super.init();
  }
}

module.exports = CommissionsOdataApi;
