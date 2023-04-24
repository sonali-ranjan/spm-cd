namespace srv;

using {db} from '../db/SalesOrder';

// @Capabilities.KeyAsSegmentSupported: true
service SalesOrderService {

  @readonly
  entity SalesOrders as projection on db.SalesOrders;

  function getRandomSalesOrder() returns SalesOrders;

}
