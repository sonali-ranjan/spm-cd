namespace srv;

using {db} from '../db/Cd_Local_Mapping';


service Cd_CustomizingService {

  @readonly
  entity Cd_Customizing as projection on db.Cd_Local_Mapping;



}