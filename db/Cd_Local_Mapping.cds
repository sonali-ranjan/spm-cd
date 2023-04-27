namespace db;
entity Cd_Local_Mapping {
  key id                : Integer;
      Tenant_Id         : String;
      Commission_EG     : String;
      Commission_EC     : String;
      Main_transaction  : String;
      Sub_transaction   : String;
      Document_Type     : String;
      Document_Category : String;
      Company_Code      : String

}