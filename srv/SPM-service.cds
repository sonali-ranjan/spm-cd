namespace srv;

using {db} from '../db/SPM';

service SPMService {

  entity FinalPayments    as projection on db.FinalPayments;
  entity Cd_Local_Mapping as projection on db.Cd_Local_Mapping;
  function sendPayment() returns Boolean;
  function getMapping()  returns Cd_Local_Mapping;
}
