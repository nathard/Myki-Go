//
// Trip History list functions
//

// Create Trip Model
var TripStoreRef = Ext.create('Ext.data.Store', {
	
	model: 'a2.model.Trip',
	grouper: function(r) {
		
		return r.get('date')[0];
	},
	sorters: 'date'
});

// List configuration
var TripListCfg = {
	xtype: 'list',
	store: TripStoreRef,
	
	title: 'Trip History',
	loadingText: 'Loading...',
	fullscreen: true,
	
	itemTpl: '{date} - {time} - {trntype}',
	
	indexBar: false,
	onItemDisclosure: true,
	
	listeners: {
		select: TripListCfg_select,
		disclose: TripListCfg_disclose,
	},
};

// Load Trip History list
function getTripList() {
	
	// Filter records by user
	var searchValue = Ext.getCmp('frmLogin').getValues().myki;
	TripStoreRef.load().filter('myki', searchValue);
	
	// Get list config and load into nav view
	var TripList = Ext.create('Ext.List', TripListCfg);
	Ext.getCmp('navView').push(TripList);
}

// Load trip history details
function TripListCfg_select(view, record) {
	var TripListDetails = Ext.create('Ext.Panel');
	
	var b = record.get('balance');
	var d = record.get('date');
	var t = record.get('time');
	var a = record.get('amount');
	var s = record.get('service');
	var z = record.get('zone');
	var tr = record.get('trntype');
	var dr = record.get('description');
	
	TripListDetails.setHtml('<p>Balance: ' + b + '</p><p>Date: ' + d + '</p><p>Time: ' + t +'</p><p> Amount: ' + a + '</p><p>Service: ' + s +'</p><p>Zone: ' + z + '</p><p>Transaction Type: ' + tr + '</p><p>Description: ' + dr +'</p>');
	Ext.getCmp('navView').push(TripListDetails);
	
	view.deselectAll();
}

function TripListCfg_disclose(view, record) {
	var TripListDetails = Ext.create('Ext.Panel');
	
	TripListDetails.setHtml(record.get('description'));
	Ext.getCmp('navView').push(TripListDetails);
	
	view.deselectAll();
}

//
// Top Up History list functions
//

// Create Top Up Model
var TopUpStoreRef = Ext.create('Ext.data.Store', {
	model: 'a2.model.TopUp',
	grouper: function(r) {
		
		return r.get('date')[0];
	
	},
	sorters: 'date',
	autoLoad: true
});

// List configuration
var TopUpListCfg = {
	xtype: 'list',
	store: TopUpStoreRef,
	
	title: 'Top Up History',
	loadingText: 'Loading...',
	fullscreen: true,
	
	itemTpl: '{date} - ${amount}',
	
	indexBar: false,
	onItemDisclosure: true,
	
	listeners: {
		select: TopUpListCfg_select,
		disclose: TopUpListCfg_disclose,
	},
};

// Load Top Up History list
function getTopUpList() {
	
	// Filter records by user
	var searchValue = Ext.getCmp('frmLogin').getValues().myki;
	TopUpStoreRef.load().filter('myki', searchValue);
	
	// Get list config and load into nav view
	var TopUpList = Ext.create('Ext.List', TopUpListCfg);
	Ext.getCmp('navView').push(TopUpList);
}

// Load top up history details
function TopUpListCfg_select(view, record) {
	var TopUpListDetails = Ext.create('Ext.Panel');
	
	var b = record.get('balance');
	var d = record.get('date');
	var t = record.get('time');
	var a = record.get('amount');
	var s = record.get('service');
	var z = record.get('zone');
	var tr = record.get('trntype');
	var dr = record.get('description');
	
	TopUpListDetails.setHtml('<p>Balance: ' + b + '</p><p>Date: ' + d + '</p><p>Time: ' + t +'</p><p> Amount: ' + a + '</p><p>Service: ' + s +'</p><p>Zone: ' + z + '</p><p>Transaction Type: ' + tr + '</p><p>Description: ' + dr +'</p>');
	
	Ext.getCmp('navView').push(TopUpListDetails);
	
	view.deselectAll();
}

function TopUpListCfg_disclose(view, record) {
	var TopUpListDetails = Ext.create('Ext.Panel');
	
	TopUpListDetails.setHtml(record.get('description'));
	Ext.getCmp('navView').push(TopUpListDetails);
	
	view.deselectAll();
}

//
// Load Account management menu
//

function AccMgmt() {
	
	// Load top up model and filter records by user
	var searchValue = Ext.getCmp('frmLogin').getValues().myki;
	TopUpStoreRef.load().filter('myki', searchValue);
	
	// Load most recent balance into label
	var view = Ext.create('a2.view.AccMgmt');
	var balance = TopUpStoreRef.getAt(0).data.balance;
	var label = Ext.getCmp('myLabel');
	label.setHtml('<b>Myki Balance: $' + balance + '</b>');
	
	Ext.getCmp('navView').push(view);

}
//
// Load Main menu, note this exists in account management handler.
// this is to reload xml before entering account management menu
// required for label to read correctly
//

function MainMenu() {
	
	
	var searchValue = Ext.getCmp('frmLogin').getValues().myki;
	TopUpStoreRef.load().filter('myki', searchValue);
	
	Ext.getCmp('navView').push(Ext.create('a2.view.Main'));
}


//
// The body of your controller code.
//
var controllerDef = {
	extend: 'Ext.app.Controller',
	config: {
		control: {
			'button[action=ucTopUpHistory]': {
				tap: function() {
					getTopUpList();
				}
			},
			
			'button[action=ucTripHistory]': {
				tap: function() {
					getTripList();
				}
			},
			
			'button[action=ucMain]': {
				tap: function() {
					MainMenu();
				}
			},
			
			'button[action=ucAccMgmt]': {
				tap: function() {
					AccMgmt();
				}
			},
		}
	}
};

Ext.define('a2.controller.AccMgmtHandler', controllerDef);
