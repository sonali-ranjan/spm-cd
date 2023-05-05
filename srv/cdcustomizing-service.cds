namespace srv;

using {db} from '../db/SPM';


service Cd_Cust_MapService {

    entity Cd_customizing as projection on db.Cd_customizing;
// annotate Cd_customizing with @odata.draft.enabled;

}

annotate Cd_Cust_MapService.Cd_customizing with {
    id               @title: 'ID';
    DataType         @title: 'Data Type';
    BTPAttribute     @title: 'BTP Attribute';
    Source           @title: 'Source';
    Target           @title: 'Target';
    SourceDataType   @title: 'SourceDataType';
    CDObject         @title: 'CD Object';
    Length           @title: 'Length';
    DataConvRequired @title: 'Data Conv Required';
    ShortDesc        @title: 'Short Desc';
}

annotate Cd_Cust_MapService.Cd_customizing with @UI: {
    SelectionFields: [
        id,
        DataType
    ],
    LineItem       : [
        {Value: id},
        {Value: DataType},
        {Value: BTPAttribute},
        {Value: Source},
        {Value: Target},
        {Value: SourceDataType},
        {Value: CDObject},
        {Value: Length},
        {Value: DataConvRequired},
        {Value: ShortDesc}
    ]
};


service Cd_Local_MapService {

    entity Cd_Local_Mapping as projection on db.Cd_Local_Mapping;
// annotate Cd_customizing with @odata.draft.enabled;

}

annotate Cd_Local_MapService.Cd_Local_Mapping with {
    id               @title: 'ID';
    TenantId         @title: 'Tenant';
    CommissionEG     @title: 'CommissionEG';
    CommissionEC     @title: 'CommissionEC';
    MainTransaction  @title: 'MainTransaction';
    SubTransaction   @title: 'SubTransaction';
    DocumentType     @title: 'DocumentType ';
    DocumentCategory @title: 'DocumentCategory';
    CompanyCode      @title: 'CompanyCode';
    
}

annotate Cd_Local_MapService.Cd_Local_Mapping with @UI: {
    SelectionFields: [
        id,
        CommissionEG
    ],
    LineItem       : [
        {Value: id},
        {Value: TenantId},
        {Value: CommissionEG},
        {Value: CommissionEC},
        {Value: MainTransaction},
        {Value: SubTransaction},
        {Value: DocumentType},
        {Value: DocumentCategory},
        {Value: CompanyCode},
    
    ]
};

service Cd_bp_Mapservice{
    entity bp_mapping as projection on db.bp_mapping;       
}

annotate Cd_bp_Mapservice.bp_mapping with {
    id               @title: 'ID';
    bp               @title: 'Business Partner';
    partid           @title: 'Participant Key';
    partval          @title: 'Participant ID';   
}

annotate Cd_bp_Mapservice.bp_mapping with @UI: {
    SelectionFields: [
        id,
        bp
    ],
    LineItem       : [
        {Value: id},
        {Value: bp},
        {Value: partid},
        {Value: partval},    
    ]
};

service Cd_io_Mapservice{
    entity io_mapping as projection on db.io_mapping;       
}

annotate Cd_io_Mapservice.io_mapping with {
    id               @title: 'ID';
    io               @title: 'Insurance Object';
    posid            @title: 'Position Key';
    posval           @title: 'Position ID';   
}

annotate Cd_io_Mapservice.io_mapping with @UI: {
    SelectionFields: [
        id,
        io
    ],
    LineItem       : [
        {Value: id},
        {Value: io},
        {Value: posid},
        {Value: posval},    
    ]
};