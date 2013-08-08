// Choose top up payment method view
var boxp = {
	flex: 1
};
var PayMethodMenuButtons = {
	xtype: 'panel',
	
	layout: {
		type: 'vbox'
	},
	
	
	items: [
		boxp,
		{
			xtype: 'button',
			text: 'Credit Card',
			flex: 1,
			ui: 'confirm',
			action: 'ucTopUpCard',
			minHeight: 50,
			minWidth: 150
		},
		boxp,
		{
			xtype: 'button',
			text: 'Voucher',
			flex: 1,
			ui: 'confirm',
			action: 'ucTopUpVoucher',
			minHeight: 50,
			minWidth: 150
		},
		boxp
	]
};


var viewDefPayMethod = {
	
	extend: 'Ext.Panel',
    config: {
        fullscreen: true,
        title: 'Payment Method',
		layout: {
			type: 'hbox'
		},
		items: [boxp, PayMethodMenuButtons, boxp]
    }	
};

Ext.define("a2.view.PayMethod", viewDefPayMethod);
