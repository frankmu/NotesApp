Ext.define('NotesApp.controller.MainMenu', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			mainMenuView: 'mainmenuview',
			myNotesBookView:'mynotesbook',
			publicNotesBookView:'publicnotesbook',
			notesListView:'noteslistview'
		},
		control: {
			myNotesBookView: {
				// The commands fired by the notes list.
				showNotesBook: 'onShowNotesBookCommand'
			},
			publicNotesBookView: {
				// The commands fired by the notes list.
				showNotesBook: 'onShowNotesBookCommand'
			},
		}
	},
	onShowNotesBookCommand:function(record){
		console.log("go to notes list"+record);
		//notesListView = this.getNotesListView();
		//this.getMyNotesBookView().animateActiveItem(notesListView, this.getSlideLeftTransition());
		if (!this.showNotesListView) {
            this.NotesListView = Ext.create('NotesApp.view.NotesList');
        }

        // Bind the record onto the show contact view
        this.NotesListView.setRecord(record);

        // Push the show contact view into the navigation view
        this.getMyNotesBookView().push(this.NotesListView);
	},
	getSlideLeftTransition: function() {
		return {
			type: 'slide',
			direction: 'left'
		};
	}
});