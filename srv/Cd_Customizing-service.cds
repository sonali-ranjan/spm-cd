namespace srv;

using {db} from '../db/SPM';


service Cd_CustomizingService {

  entity Cd_Customizing   as projection on db.Cd_customizing;

  entity Cd_Local_Mapping as projection on db.Cd_Local_Mapping;

}
