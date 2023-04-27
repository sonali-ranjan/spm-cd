namespace db;

entity salesOrders {
    key orderId       : Integer;
        name          : String(111);
        businessUnits : Association to BusinessUnit;
}

entity BusinessUnit {
    key businessUnitSeq : Integer;
    key name            : String(10);
}

entity unitType {
    key unitTypeSeq : Integer;
    key name        : String(10);
}

entity Payments {
    key PaymentSeq     : Integer;
        // name           : String(111);
        EarningGroupId : String(20);
        EarningCodeId  : String(20);
        Value          : Association to Value;
}

entity Value {
    key UnitType : String(10);
    key Value    : Integer;
}

entity FinalPayments {
    key PaymentSeq   : Integer;
        EarningGroup : String(20);
        EarningCode  : String(20);
        Currency     : String(10);
        Amount       : Integer;
        PayeeSeq      : Integer; //": "US1005",
        PostingDate  : Date; //"2020-05-31",
        PositionSeq : Integer; //"US1005-P1";
        Tenant       : String(4) default '1270';
}
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