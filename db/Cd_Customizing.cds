namespace db;
entity Cd_customizing {
  key id                 : Integer;
      Mapping_type       : String;
      BTP_ATTRIBUTE      : String;
      Source             : String;
      Target             : String;
      Source_data_type   : String;
      CD_Object          : String;
      DATA_TYPE          : String;
      Length             : Integer;
      DATA_CONV_REQUIRED : String;
      SHORT_DESC         : String
}