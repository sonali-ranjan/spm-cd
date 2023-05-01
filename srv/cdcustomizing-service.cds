namespace srv;

using {db} from '../db/SPM';


service CdCustomizingService {

  entity Cd_Customizing   as projection on db.CdCustomizing;

  entity Cd_Local_Mapping as projection on db.CdLocalMapping;

}
