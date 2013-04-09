Ext.define('NotesApp.store.Notebooks', {
	extend: 'Ext.data.Store',
	config: {
		model: 'NotesApp.model.Notebook',
		autoLoad: true,
		proxy: {
        	type: 'ajax',
       		url : 'http://note.creatzy.com/notebook/getBookList',
       		reader: {
            	type: 'json',
            	root: 'NotesApp.model.Notebook'
        	}
    	}
	}
});