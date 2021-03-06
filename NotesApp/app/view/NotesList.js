Ext.define('NotesApp.view.NotesList', {
	extend: 'Ext.Container',
	requires: ['Ext.TitleBar', 'Ext.dataview.List'],
	alias: 'widget.noteslistview',
	config: {
		layout: {
			type: 'fit'
		},
		items: [{
			xtype: 'titlebar',
			title: 'My Notes',
			docked: 'top',
			items: [{
				xtype: 'button',
				text: 'New',
				ui: 'action',
				itemId: 'newButton',
				align: 'right'
			}]
		}, {
			xtype: 'list',
			store: 'Notes',
			itemId: 'notesList',
			loadingText: 'Loading Notes...',
			emptyText: '<div class="notes-list-empty-text">No notes found.</div>',
			onItemDisclosure: true,
			grouped: true,
			itemTpl: '<div class="list-item-title">{notename}</div><div class="list-item-narrative">{content}</div>'
		}],
		listeners: [{
			delegate: '#newButton',
			event: 'tap',
			fn: 'onNewButtonTap'
		}, {
			delegate: '#notesList',
			event: 'disclose',
			fn: 'onNotesListDisclose'
		}]
	},
	onNewButtonTap: function() {
		console.log('newNoteCommand');
		this.fireEvent('newNoteCommand', this);
	},
	onNotesListDisclose: function (list, record, target, index, evt,options) {
		console.log('editNoteCommand');
		this.fireEvent('editNoteCommand', this, record);
	}
});