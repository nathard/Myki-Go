// Top Up transaction complete form
var boxm = {
	flex: 1
};
var TopUpSuccessPanel = {
	xtype: 'panel',
	
	layout: {
		type: 'vbox'
	},
	
	
	items: [
		boxm,
		{
			xtype: 'label',
			html: '<b>Top Up Success!</b>',
			flex: 1
		},
		boxm,
		{
			xtype: 'button',
			text: 'Main Menu',
			flex: 1,
			ui: 'confirm',
			action: 'ucMain'
		},
		boxm
	]
	
};



var viewDefSuccess = {
	
	extend: 'Ext.Panel',
    config: {
        fullscreen: true,
        title: 'Transaction',
		layout: {
			type: 'hbox'
		},
		items: [boxm, TopUpSuccessPanel, boxm]
    }	
};

Ext.define("a2.view.TopUpSuccess", viewDefSuccess);
