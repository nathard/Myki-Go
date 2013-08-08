Ext.define('a2.model.TopUp', {
    extend: 'Ext.data.Model',
    config: {
    	
		fields: ['myki', 'balance', 'date', 'time', 'amount', 'service', 'zone', 'trntype', 'description'],
		
		proxy: {
			type: 'ajax',
			url : 'topup.xml',
			reader: {
				type: 'xml',
				record: 'records',
				rootproperty: 'customer'
			}
		}
	}
});
