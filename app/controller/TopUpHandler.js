// Process credit card details
function ProcessCCDetails() {
	
	// Get form values
	var form = Ext.getCmp('frmCCDetails');
	var data = form.getValues();
	var myki = Ext.getCmp('frmLogin').getValues().myki;
	var ten = Ext.getCmp('ten').getData('itemId');
	var twenty = Ext.getCmp('twenty').getData('itemId');
	var fifty = Ext.getCmp('fifty').getData('itemId');
	
	// Call external php script
	Ext.Ajax.request({
		url: 'ccauth.php',
		method: 'GET',
		params: {
			CC: data.CC,
			exp: data.exp,
			ccv: data.ccv,
			ten: ten,
			twenty: twenty,
			fifty: fifty,
			myki: myki,
			
		},
		success: function(response) {
			var obj = Ext.JSON.decode(response.responseText);
			if(obj.success){
			
				Ext.getCmp('navView').push(Ext.create('a2.view.TopUpSuccess'));
				
			}
			else {
				Ext.Msg.alert("Error!", "Invalid Credit Card");
			}
		}
	});
}

// Process Myki Voucher
function ProcessVoucher() {
	
	// Get form values
	var form = Ext.getCmp('frmVoucher');
	var data = form.getValues();
	var myki = Ext.getCmp('frmLogin').getValues().myki;
	var ten = Ext.getCmp('ten').getData('itemId');
	var twenty = Ext.getCmp('twenty').getData('itemId');
	var fifty = Ext.getCmp('fifty').getData('itemId');
	
	// Call external php script
	Ext.Ajax.request({
		url: 'vauth.php',
		method: 'GET',
		params: {
			vchr: data.vchr,
			ten: ten,
			twenty: twenty,
			fifty: fifty,
			myki: myki,
		},
		success: function(response) {
			var obj = Ext.JSON.decode(response.responseText);
			if(obj.success){
			
				Ext.getCmp('navView').push(Ext.create('a2.view.TopUpSuccess'));
				
			}
			else {
				Ext.Msg.alert("Error!", "Invalid Voucher");
			}
		}
	});
}

// Load Top up amount menu
function TopUpAmnt() {
	
	Ext.destroy(Ext.getCmp('frmTopUpAmnt'));
	
	Ext.getCmp('navView').push(Ext.create('a2.view.TopUpAmnt'));
}

// Pay Methods for different amounts

function PayMethodTen() {
	
	Ext.getCmp('ten').setData('10')
	
	Ext.getCmp('navView').push(Ext.create('a2.view.PayMethod'));
}

function PayMethodTwenty() {
	
	Ext.getCmp('twenty').setData('20')
	
	Ext.getCmp('navView').push(Ext.create('a2.view.PayMethod'));
}

function PayMethodFifty() {
	
	Ext.getCmp('fifty').setData('50')
	
	Ext.getCmp('navView').push(Ext.create('a2.view.PayMethod'));
}

// Enter your credit card details

function CreditCardDetails() {
	
	Ext.destroy(Ext.getCmp('frmCCDetails'));
	
	Ext.getCmp('navView').push(Ext.create('a2.view.CCDetails'));
}

// Load top up by voucher view
function TopUpVoucher() {
	
	Ext.destroy(Ext.getCmp('frmVoucher'));
	
	Ext.getCmp('navView').push(Ext.create('a2.view.Voucher'));
}
//
// The body of your controller code.
//
var controllerTopUp = {
	extend: 'Ext.app.Controller',
	config: {
		control: {
		
			'button[action=ucTopUpAmnt]': {
				tap: function() {
					TopUpAmnt();
				}
			},
			
			'button[action=ucPayMethodTen]': {
				tap: function() {
					PayMethodTen();
				}
			},
			
			'button[action=ucPayMethodTwenty]': {
				tap: function() {
					PayMethodTwenty();
				}
			},
			
			'button[action=ucPayMethodFifty]': {
				tap: function() {
					PayMethodFifty();
				}
			},
			
			'button[action=ucTopUpCard]': {
				tap: function() {
					CreditCardDetails();
				}
			},
			
			'button[action=ucProcessCC]': {
				tap: function() {
					ProcessCCDetails();
				}
			},
			
			'button[action=ucProcessVoucher]': {
				tap: function() {
					ProcessVoucher();
				}
			},
			
			'button[action=ucTopUpVoucher]': {
				tap: function() {
					TopUpVoucher();
				}
			},
		}
	}
};

Ext.define('a2.controller.TopUpHandler', controllerTopUp);
