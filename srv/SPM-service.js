// const { tenantId } = require("@sap-cloud-sdk/connectivity/internal");
const cds = require("@sap/cds");
// const cd = require("./payments-service")

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

    res.forEach(async element => {

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

      // cds.run(INSERT.into(FinalPayments).entries(
      //   {
      //     PaymentSeq: element.PaymentSeq,
      //     EarningGroup: element.EarningGroupId,
      //     EarningCode: element.EarningCodeId,
      //     Currency: element.Value.UnitType,
      //     Amount: element.Value.Value,
      //     PayeeSeq: element.Payee.PayeeSeq,
      //     PostingDate: element.Period.EndDate,
      //     PositionSeq: element.Position.RuleElementOwnerSeq,
      //     Tenant: "1270"
      //   }
      // ));

      //const { Pay } = cds.entities ('srv.Cd_Local_MapService') --- not connected to datasource
      // const srv = await cds.connect.to("db/data/srv.Cd_Local_MapService-Cd_Local_Mapping.csv");

      let CustomizingData = {
        SELECT: {
          from: { ref: ["srv.Cd_Local_MapService"] },
          columns: [
            { ref: ["id"] },
            { ref: ["TenantId"] },
            { ref: ["CommissionEG"] },
            { ref: ["CommissionEC"] },
            { ref: ["MainTransaction"] },
            { ref: ["SubTransaction"] },
            { ref: ["DocumentType"] },
            { ref: ["CompanyCode"] },
          ],
          where: [{ ref: ["CommissionEG"] }, "=", { val: "Commission" },
          { ref: ["CommissionEC"] }, "=", { val: "Auto Premium Commission" }]
        }
      };
      console.log("Customizing data: ", CustomizingData);

      // SELECT.from ('srv.Cd_Local_MapService', a => {a.id, a.TenantId, a.CommissionEG, a.CommissionEC, a.MainTransaction, a.subTransaction, a.DocumentType, a.CompanyCode}). where('CommissionEG = Commission')


      let CustData = {
        SELECT: {
          from: { ref: ["srv.Cd_bp_Mapservice"] },
          columns: [
            { ref: ["id"] },
            { ref: ["bp"] },
            { ref: ["partid"] },
            { ref: ['partval'] }
          ]
        }
      }
      console.log(CustData);

      // let CustData = SELECT from db.srv.Cd_Local_MapService-Cd_Local_Mapping { tenantId};

      //       let pay = await SELECT.from(srv.Cd_Local_MapService);
      // console.log(pay);

      // let CQN = {INSERT:{
      //   into: { ref: ['srv.Cd_Local_MapService'] },
      //   columns: [ 'id', 'TenantId', 'CommissionEG', 'CommissionEC', 'MainTransaction', 'SubTransaction', 'DocumentType', 'CompanyCode' ],
      //   values: [ 201, 1270, 'Bonus', 'Bonus', 101, 12, 765, 'SR001' ]
      // }}
      // cds.run(CQN);

      return res.Payments;

    })
  }

  this.on("getMapping", async (req) => {
    const SPMService = await cds.connect.to("srv.Cd_Local_MapService");
    let CustData = {
      SELECT: {
        from: { ref: ["srv.Cd_bp_Mapservice"] },
        columns: [
          { ref: ["id"] },
          { ref: ["TenantId"] },
          { ref: ["CommissionEG"] },
          { ref: ['CommissionEC'] }
        ]
      }
    }

    // return await SPMService.read('Cd_Local_Mapping')  // Works 
    // return await SPMService.read('Cd_Local_Mapping').limit(1) // Works
    // return await SPMService.read('Cd_Local_Mapping').columns("id", "TenantId", "CommissionEG", 'CommissionEC') // Works

    const { Cd_Local_Mapping } = SPMService.entities

    return await SELECT.from(Cd_Local_Mapping)
  })
});
