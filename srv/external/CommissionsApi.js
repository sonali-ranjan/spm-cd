const cds = require("@sap/cds");

class CommissionsApi extends cds.RemoteService {
  async init() {
    //this.reject(["CREATE", "UPDATE", "DELETE"], "*");

    this.on("READ", "*", async (req, next) => {
      
      const response = await next(req);
      return response;
    });
    super.init();
  }
}

module.exports = CommissionsApi;
