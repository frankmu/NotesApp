Ext.define('NotesApp.view.following.Card', {
	extend: 'Ext.tab.Panel',
	require: ['Ext.TitleBar'],
	config: {
		title: 'Following',
		iconCls: 'user',

		autoDestroy: false,
		styleHtmlContent: true,
		html: ['<p>Following</p>'],
	}
});