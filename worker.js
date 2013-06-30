var express  = require('express');

var cluster  = require('cluster');
var config   = require('./config/config');

// Create new express application
var app = express();


app.set('views', __dirname + '/public');
app.engine('ejs', require('ejs').renderFile );

app.use( express.static(__dirname + '/public') );
app.use( express.logger('dev') );
app.use( express.cookieParser() );
app.use( express.cookieSession({secret: config.cookieSecret }) );
app.use( express.bodyParser() );




app.get('/',function (req,res) {
	res.render(config.indexFile);
});



app.listen( config.port );
console.log('Worker running!' + cluster.worker.id );




