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
    key PaymentSeq     : Integer64;
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
    key PaymentSeq   : Integer64;
        EarningGroup : String(20);
        EarningCode  : String(20);
        Currency     : String(10);
        Amount       : Integer;
        PayeeSeq     : Integer; //": "US1005",
        PostingDate  : Date; //"2020-05-31",
        PositionSeq  : Integer; //"US1005-P1";
        Tenant       : String(4) default '1270';
}

entity Cd_customizing {
   key 
      id               : Integer;
      MappingType      : String(10);
      BTPAttribute     : String(15);
      Source           : String(12);
      Target           : String(12);
      SourceDataType   : String(8);
      CDObject         : String(12);
      DataType         : String(5);
      Length           : Integer;
      DataConvRequired : String(5);
      ShortDesc        : String(25)
}
entity Cd_Local_Mapping {
 key id               : Integer;
      TenantId         : String(10);
      CommissionEG     : String(30);
      CommissionEC     : String(30);
      MainTransaction  : String(10);
      SubTransaction   : String(10);
      DocumentType     : String(5);
      DocumentCategory : String(5);
      CompanyCode      : String(5)
}
entity bp_mapping{
      key id : Integer;
      key bp : String(10);
      key partid : String;
      partval : String
}
entity io_mapping{
      key id : Integer;
      key io : String(20);
      key posid : String;
      posval : String
}