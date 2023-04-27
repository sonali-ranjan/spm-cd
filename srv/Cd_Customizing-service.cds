namespace srv;

using {db} from '../db/Cd_Customizing';


service Cd_CustomizingService {

  @readonly
  entity Cd_Customizing as projection on db.Cd_customizing;



}