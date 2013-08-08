// Myki authentication View



var Login = {
	
	xtype: 'formpanel',
	id: 'frmLogin',
	title: 'Myki-Go',
	items: [
	{
		xtype: 'fieldset',
		title: 'Myki Pass No.',
		instructions: 'Enter your Myki Card Number and Security Pin then press continue',
		items: [
		{
			xtype: 'numberfield',
			name: 'myki',
			placeHolder: 'Demo: 346571900865234'
			
		},
		{
			xtype: 'passwordfield',
			name: 'pin',
			label: 'Pin',
			placeHolder: 'Demo: 1234'
		}]
	},
	{
		xtype: 'fieldset',
		items: [
		{
			xtype: 'button',
			ui: 'confirm',
			action: 'ucProcessLogin',
			text: 'Continue',
		}]
	}]
};

var viewDef = {
	
    extend: 'Ext.NavigationView',
	id: 'navView',
    requires: [
        'Ext.TitleBar',
		'Ext.field.Password',
		'Ext.form.FieldSet',
		'Ext.dataview.List',
		'Ext.field.Number',
		'Ext.Label',
		'Ext.Map',
		'a2.view.TopUpSuccess'
    ],
    
    config: {
        fullscreen: true,
		items: [Login]
    }	
};

Ext.define("a2.view.Login", viewDef);
