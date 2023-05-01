const { getSoapService, createClient } = require('./soap-service');

let userReadServicePromise = null;
let userReadServiceEndpoint = { url: null };


(async function () {
    
    // Connect to external S/4HC SOAP service
   userReadServicePromise = getSoapService();

})();

/*** HANDLERS ***/

async function readPayment(req) {
       
    userReadServiceEndpoint

    // try{
    //     await userReadServicePromise.ZISCD_SCPOS_MAINTAIN(param).then((result) => {
    //         posting = result[0]
    //     })
    //     return posting
    // }catch (e) {
    //     console.log(e.message)
    //     return e.message
    // }
        // Invoke zbind_iscd_scpos method asynchronously and wait for the response
       //const resp = await userReadService.ISCD_SCPOS_MAINTAINAsync(param)
       //console.log(resp)
        // Prepare the actual service response
        //console.log(resp)
        // const payments = [];
       
}

module.exports = {
    readPayment
}
