Ext.define('NotesApp.view.home.Card', {
	extend: 'Ext.tab.Panel',
	require: ['Ext.TitleBar'],
	config: {
		title: 'Home',
		iconCls: 'home',

		autoDestroy: false,
		tabBarPosition: 'top',
		styleHtmlContent: true,
		items: [
		{
		    xtype:'mynotesbook'
		},
		{
		    xtype:'publicnotesbook'
		},
		]
	}
});