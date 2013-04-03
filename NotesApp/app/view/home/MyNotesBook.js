Ext.define('NotesApp.view.home.MyNotesBook', {
	extend: 'Ext.navigation.View',
	requires: ['Ext.dataview.List'],
	xtype: 'mynotesbook',
	config: {
		fullscreen:false,
		layout: 'card',
		title: 'My Notes',
		items: [{
			xtype: 'list',
			store: 'Notebooks',
			itemId: 'notebooks',
			onItemDisclosure: true,
			loadingText: 'Loading Notes...',
			emptyText: '<div class="notes-list-empty-text">No notesbook found.</div>',
			itemTpl: '<div class="notebook_img"><img src={img} width="50px"/></div><div class="notebook_title">{title}</div>'
		}],
		listeners: [{
			delegate: '#notebooks',
			event: 'disclose',
			fn: 'onNotesBookTap'
		}],
	},
	onNotesBookTap:function(list, record, target, index, evt,options){
		console.log("open note book");
		this.fireEvent('showNotesBook', this, record);
	}
});