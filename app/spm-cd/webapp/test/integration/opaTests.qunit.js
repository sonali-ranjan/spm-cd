sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'msg/spmcd/test/integration/FirstJourney',
		'msg/spmcd/test/integration/pages/PaymentList',
		'msg/spmcd/test/integration/pages/PaymentObjectPage'
    ],
    function(JourneyRunner, opaJourney, PaymentList, PaymentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('msg/spmcd') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePaymentList: PaymentList,
					onThePaymentObjectPage: PaymentObjectPage
                }
            },
            opaJourney.run
        );
    }
);