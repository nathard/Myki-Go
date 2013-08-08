

function ProcessLogin() {
	var form = Ext.getCmp('frmLogin');
	var data = form.getValues();
	
	Ext.Ajax.request({
		url: 'login.php',
		method: 'GET',
		params: {
			myki: data.myki,
			pin: data.pin
		},
		success: function(response) {
			var obj = Ext.JSON.decode(response.responseText);
			if(obj.success){
			
				Ext.getCmp('navView').push(Ext.create('a2.view.Main'));
				
			}
			else {
				Ext.Msg.alert("Error!", "Login Failed");
			}
		}
	});
}


function getLocation() {
	
	var getMap = {
		title: 'Locator',
		xtype: 'map',
		id: 'ShowMap',
		useCurrentLocation: true
		
	};	
	
	Ext.getCmp('navView').push(getMap);
}


var controllerDef = {
	extend: 'Ext.app.Controller',
	config: {
		control: {
			
			'button[action=ucProcessLogin]': {
				tap: function() {
					ProcessLogin();
				}
			},
			
			
			
			'button[action=ucLocator]': {
				tap: function() {
					getLocation();
				}
			},
		}
	}
};

Ext.define('a2.controller.Handler', controllerDef);
