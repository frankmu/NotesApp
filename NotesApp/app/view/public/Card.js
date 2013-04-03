Ext.define('NotesApp.view.public.Card', {
	extend: 'Ext.navigation.View',
	requires: ['Ext.dataview.List'],
    xtype:'publicnotesbook',
	config: {
		title: 'Public Notes',
		iconCls: 'user',
		autoDestroy: false,
		tabBarPosition: 'top',
		styleHtmlContent: true,
		items: [{
			xtype: 'image',
			src: '/NotesApp/img/NoteAppLogo.png',
			style: 'width:100px;height:100px',
			itemId: 'notesBook',
		}],
		listeners: [{
			delegate: '#notesBook',
			event: 'tap',
			fn: 'onNotesBookTap'
		}],
	},
	onNotesBookTap:function(){
		this.fireEvent('showNotesBook', this);
	}
});