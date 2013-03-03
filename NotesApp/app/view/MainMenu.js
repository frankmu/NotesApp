Ext.define('NotesApp.view.MainMenu', {
    extend: 'Ext.tab.Panel',
    require:['Ext.TitleBar'],
    alias: 'widget.mainmenuview',
    config:{
        tabBarPosition: 'bottom',        
        styleHtmlContent:true,
        items:[
            {
                xclass:'NotesApp.view.home.Card'
            },
            {
                xclass:'NotesApp.view.settings.Card'
            },
            {
                xclass:'NotesApp.view.following.Card'
            },
            
            {
                xclass:'NotesApp.view.comments.Card'
            },
            {
                xclass:'NotesApp.view.friend.Card'
            }
        ]
    }
});