Ext.define('NotesApp.model.Notebook', {
	extend: 'Ext.data.Model',
	config: {
		idProperty: 'id',
		fields: [{
			name: 'id',
			type: 'int'
		}, {
			name: 'date',
			type: 'date',
			dateFormat: 'c'
		}, {
			name: 'name',
			type: 'string'
		}, {
			name: 'img',
			type: 'string'
		}],
	}
});