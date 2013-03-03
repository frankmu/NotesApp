Ext.define('NotesApp.view.comments.Card', {
	extend: 'Ext.tab.Panel',
	require: ['Ext.TitleBar'],
	config: {
		title: 'comments',
		iconCls: 'comments',

		autoDestroy: false,
		styleHtmlContent: true,
		html: ['<p>Comments</p>'],
	}
});