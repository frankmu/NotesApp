var express = require('express');

var app = express();


app.configure(function() {
  app.use(express.static(__dirname+'/NotesApp'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.set('view options', {layout: false});
  app.set('view engine', 'dust');
  
});

app.listen(8000);