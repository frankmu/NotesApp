Ext.define('NotesApp.view.friend.Card', {
	extend: 'Ext.tab.Panel',
	require: ['Ext.TitleBar'],
	config: {
		title: 'Friends',
		iconCls: 'user',

		autoDestroy: false,
		styleHtmlContent: true,
		html: ['<p>Friends</p>'],
	}
});