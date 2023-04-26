namespace db2;

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
