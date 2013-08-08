// Choose top up amount view
var boxa = {
	flex: 1
};

var AmountMenuButtons = {
	xtype: 'panel',
	
	layout: {
		type: 'vbox'
	},
	
	
	items: [
		boxa,
		{
			xtype: 'button',
			text: '$10',
			flex: 1,
			ui: 'confirm',
			id: 'ten',
			name: '10',
			action: 'ucPayMethodTen',
			minHeight: 50,
			minWidth: 150
		},
		boxa,
		{
			xtype: 'button',
			text: '$20',
			flex: 1,
			ui: 'confirm',
			id: 'twenty',
			name: '20',
			action: 'ucPayMethodTwenty',
			minHeight: 50,
			minWidth: 150
		},
		boxa,
		{
			xtype: 'button',
			text: '$50',
			flex: 1,
			id: 'fifty',
			ui: 'confirm',
			action: 'ucPayMethodFifty',
			minHeight: 50,
			minWidth: 150
		},
		boxa
	]
};


var viewDefAmt = {
	
	extend: 'Ext.form.Panel',
	id: 'frmTopUpAmnt',
    config: {
        fullscreen: true,
        title: 'Choose Amount',
		layout: {
			type: 'hbox'
		},
		items: [boxa, AmountMenuButtons, boxa]
    }	
};

Ext.define("a2.view.TopUpAmnt", viewDefAmt);
