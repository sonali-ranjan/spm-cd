namespace srv;

using {db} from '../db/SalesOrder';
using {db2} from '../db/Payments';

// @Capabilities.KeyAsSegmentSupported: true
service SalesOrderService {

  //@readonly
  entity SalesOrders as projection on db.SalesOrders;

  entity Payments     as projection on db2.Payments;
  // entity payments    as projection on db.SalesOrders;
  function getRandomSalesOrder() returns SalesOrders;
  function sendPayment() returns Boolean;// returns SalesOrders;
}
