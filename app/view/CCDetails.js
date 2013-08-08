//  Credit Card Details form
var CCDetails = {
		
	items: [
	{
		xtype: 'fieldset',
		instructions: 'Enter your Credit Card details and press continue',
		title: 'Credit Card Details',
		items: [
		{
			xtype: 'numberfield',
			name: 'CC',
			minValue: 16,
            maxValue: 16,
            placeHolder: 'Demo: 3245654832458764'
			
		},
		{
			xtype: 'numberfield',
			name: 'exp',
			minValue: 4,
            maxValue: 4,
			label: 'Expiry',
			placeHolder: 'Demo: 1216'
		},
		{
			xtype: 'passwordfield',
			name: 'ccv',
			minValue: 3,
            maxValue: 3,
			label: 'CCV',
			placeHolder: 'Demo: 123'
		},
		]
	},
	{
		xtype: 'fieldset',
		items: [
		{
			xtype: 'button',
			ui: 'confirm',
			action: 'ucProcessCC',
			text: 'Continue',
		}]
	}]
};

var viewDefCC = {
	
	extend: 'Ext.form.Panel',
	title: 'Credit Card',
	id: 'frmCCDetails',
	
    config: {
        fullscreen: true,
		items: [CCDetails]
    }	
};

Ext.define("a2.view.CCDetails", viewDefCC);