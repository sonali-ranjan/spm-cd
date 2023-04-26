using srv.SalesOrderService as service from '../../srv/salesOrder-service';

annotate service.Payment with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'PaymentSeq',
            Value : PaymentSeq,
        },
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'EarningGroupId',
            Value : EarningGroupId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'EarningCodeId',
            Value : EarningCodeId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Value_UnitType',
            Value : Value_UnitType,
        },
    ]
);
annotate service.Payment with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'PaymentSeq',
                Value : PaymentSeq,
            },
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'EarningGroupId',
                Value : EarningGroupId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'EarningCodeId',
                Value : EarningCodeId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Value_UnitType',
                Value : Value_UnitType,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Value_Value',
                Value : Value_Value,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
