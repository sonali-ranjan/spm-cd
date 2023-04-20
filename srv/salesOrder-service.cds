namespace srv;

using {db} from '../db/SalesOrder';

@Capabilities.KeyAsSegmentSupported : true
service SalesOrderService {
  
  @readonly
  entity CurrentSalesOrder as projection on db.SalesOrder;
}
