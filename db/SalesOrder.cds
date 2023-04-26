namespace db;

entity SalesOrders {
    key orderId       : Integer;
        name          : String(111);
        businessUnits : Association to BusinessUnit;
}

entity BusinessUnit {
    key businessUnitSeq : Integer;
    key name            : String(10);
}

entity payments {
    key paymentSeq      : Integer;
        reason          : String(20);
        period          : Integer;
        postPipelineRun : Integer;
        //     postPipelineRunDate : DateTime;
        earningCodeId   : String(20);
        earningGroupId  : String(20);
        payee           : Integer;
        //  trialPipelineRunDate": "2018-10-23T11:56:08.000-0700",
        //  trialPipelineRun": "20547673299877911",
        //processingUnit": "38280596832649218",
        position        : Integer;
        value           : Association to value;
}

entity value {
    key value    : Decimal;
    key unitType : Association to unitType;
}

entity unitType {
    key unitTypeSeq : Integer;
    key name        : String(10);
}
