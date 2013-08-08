// Main Menu view
var box = {
	flex: 1
};

var menuButtons = {
	xtype: 'panel',
	
	layout: {
		type: 'vbox'
	},
	
	items: [
		box,
		{
			xtype: 'button',
			text: 'Top Up',
			flex: 1,
			ui: 'confirm',
			action: 'ucTopUpAmnt',
			minHeight: 50,
			minWidth: 150
		},
		box,
		{
			xtype: 'button',
			text: 'Manage',
			flex: 1,
			ui: 'confirm',
			action: 'ucAccMgmt',
			minHeight: 50,
			minWidth: 150
		},
		box,
		{
			xtype: 'button',
			text: 'Locator',
			flex: 1,
			ui: 'confirm',
			action: 'ucLocator',
			minHeight: 50,
			minWidth: 150
		},
		box
	]
};

var viewDef = {
	
    extend: 'Ext.Panel',
    config: {
    	title: 'Myki-Go',
        fullscreen: true,
        layout: {
			type: 'hbox'
		},
		items: [box, menuButtons, box]
    }	
};

Ext.define("a2.view.Main", viewDef);
