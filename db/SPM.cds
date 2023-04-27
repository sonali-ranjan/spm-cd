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
