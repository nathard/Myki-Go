// Account Management View

var boxm = {
	flex: 1
};
var AccMgmtMenuItems = {
	xtype: 'panel',
	
	layout: {
		type: 'vbox'
	},
	
	
	items: [
		boxm,
		{
			xtype: 'label',
			id: 'myLabel',
			flex: 1
		},
		boxm,
		{
			xtype: 'button',
			text: 'Top Up History',
			flex: 1,
			ui: 'confirm',
			action: 'ucTopUpHistory'
		},
		boxm,
		{
			xtype: 'button',
			text: 'Trip History',
			flex: 1,
			ui: 'confirm',
			action: 'ucTripHistory'
		},
		boxm
	]
	
};



var viewDefAccMgmt = {
	
	extend: 'Ext.Panel',
    config: {
        fullscreen: true,
        title: 'Manage Account',
		layout: {
			type: 'hbox'
		},
		items: [boxm, AccMgmtMenuItems, boxm]
    }	
};

Ext.define("a2.view.AccMgmt", viewDefAccMgmt);
