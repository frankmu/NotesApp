Ext.define('NotesApp.view.home.Card', {
	extend: 'Ext.navigation.View',
	requires: ['Ext.dataview.List'],
	xtype: 'mynotesbook',
	config: {
		iconCls: 'home',

		autoDestroy: false,
		tabBarPosition: 'top',
		styleHtmlContent: true,
		title: 'My Notes',
		items: [{
			xtype: 'list',
			store: 'Notebooks',
			itemId: 'notebooks',
			onItemDisclosure: true,
			loadingText: 'Loading Notes...',
			emptyText: '<div class="notes-list-empty-text">No notesbook found.</div>',
			itemTpl: '<div class="notebook_title">{name}</div>'
		}],
		listeners: [{
			delegate: '#notebooks',
			event: 'disclose',
			fn: 'onNotesBookTap'
		}],
	},
	onNotesBookTap:function(list, record, target, index, evt,options){
		console.log("open note book");
		//console.log(this);
		//console.log(index);
		console.log(record);
		this.fireEvent('showNotesBook', this, record);
	}
});