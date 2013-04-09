Ext.define('NotesApp.store.Notes', {
	extend: 'Ext.data.Store',
	requires: ['Ext.data.proxy.LocalStorage'],
	config: {
		model: 'NotesApp.model.Note',
		proxy: {
			type: 'ajax',
			url:"http://note.creatzy.com/notes/getNoteList?notebookId=1",
		},
		sorters: [{
			property: 'dateCreated',
			direction: 'DESC'
		}],
		grouper: {
			sortProperty: 'dateCreated',
			direction: 'DESC',
			groupFn: function (record) {
				if (record && record.data.dateCreated) {
					return record.data.dateCreated.toDateString();
				} else {
					return '';
				}
			}
		}
	}
});