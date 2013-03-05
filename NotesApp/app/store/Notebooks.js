Ext.define('NotesApp.store.Notebooks', {
	extend: 'Ext.data.Store',
	config: {
		model: 'NotesApp.model.Notebook',
		data: [{
			title: 'Note 1',
			img: '/NotesApp/img/NoteAppLogo.png'
		}, {
			title: 'Note 2',
			img: '/NotesApp/img/NoteAppLogo.png'
		}],
		autoLoad: true,
		// proxy: {
		// 	type: 'localstorage',
		// 	id: 'notes-app-store'
		// },
	}
});