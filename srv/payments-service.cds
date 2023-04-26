namespace sap.extensions.soap.payments;

service Payments @(path : '/cd-payment') {
    entity Payment {
        I_POST : String;
        I_SIMU : String;
        T_MESSAGE_AUFB : String;
        T_SCPOS : Association to T_SCPOS;
}
entity T_SCPOS {
        item : item;
}
type item {
        AKTYP : String;
        GPART : String;
        VTREF : String;
        PMTFR : String;
        PMTTO : String;
        CCODE : String;
        AMOUNT_TOTAL : String;
        CURR : String;
        HVORG : String;
        TVORG : String;
        BLART : String;
        BLTYP : String;
        FAEDN : String;
        BUDAT : String;
        BLDAT : String;
        PSNGL : String;
} 
}