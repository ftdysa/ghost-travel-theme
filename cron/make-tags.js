var config = require('./../../../../config');
var sqlite3 = require('sqlite3');

var dbfile = config.development.database.connection.filename;
var db = new sqlite3.Database(dbfile);

db.serialize(function() {
   db.all("select * from tags", function(err, rows) {
       console.log(JSON.stringify(rows));
   })
});

db.close();