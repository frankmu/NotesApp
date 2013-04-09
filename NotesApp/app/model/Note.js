Ext.define('NotesApp.model.Note', {
	extend: 'Ext.data.Model',
	config: {
		idProperty: 'id',
		fields: [{
			name: 'id',
			type: 'int'
		}, {
			name: 'create_date',
			type: 'date',
			dateFormat: 'c'
		}, {
			name: 'notename',
			type: 'string'
		}, {
			name: 'content',
			type: 'string'
		}],
		validations: [{
			type: 'presence',
			field: 'id'
		}, {
			type: 'presence',
			field: 'create_date'
		}, {
			type: 'presence',
			field: 'notename',
			message: 'Please enter a title for this note.'
		}]
	}
});