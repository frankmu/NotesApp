Ext.define('NotesApp.view.settings.Card', {
	extend: 'Ext.tab.Panel',
	require: ['Ext.TitleBar'],
	config: {
		title: 'Settings',
		iconCls: 'settings',

		autoDestroy: false,
		styleHtmlContent: true,
		html: ['<p>Settings</p>'],
	}
});