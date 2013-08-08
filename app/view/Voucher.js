// Myki Voucher Top Up View
var Voucher = {
		
	items: [
	{
		xtype: 'fieldset',
		instructions: 'Enter your Voucher number or Scan barcode and press continue',
		title: 'Top Up Voucher',
		items: [
		{
			xtype: 'numberfield',
			name: 'vchr',
			minValue: 9,
            maxValue: 12,
            placeHolder: 'Demo: 349675443892'
			
		}
		
		]
	},
	{
		xtype: 'fieldset',
		items: [
		{
			xtype: 'button',
			ui: 'confirm',
			action: 'ucProcessVoucher',
			text: 'Continue',
		},
		{
			xtype: 'button',
			ui: 'confirm',
			action: 'ucBarcodeScanner',
			text: 'Scan',
		}]
	}]
};

var viewDefVoucher = {
	
	extend: 'Ext.form.Panel',
	title: 'Voucher',
	id: 'frmVoucher',
    config: {
        fullscreen: true,
		items: [Voucher]
    }	
};

Ext.define("a2.view.Voucher", viewDefVoucher);