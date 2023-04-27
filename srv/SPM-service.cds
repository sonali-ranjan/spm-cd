namespace srv;

using {db} from '../db/SPM';

service SPMService {

  entity FinalPayments     as projection on db.FinalPayments;
  function sendPayment() returns Boolean;
}
