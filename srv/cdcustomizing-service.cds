namespace srv;

using {db} from '../db/SPM';


service CdCustomizingService {

  entity CdCustomizing   as projection on db.CdCustomizing;

  entity CdLocalMapping as projection on db.CdLocalMapping;

}
