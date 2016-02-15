
//Lets require/import the HTTP module
//var app = require('express')();
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Lets define a port we want to listen to
const PORT=8082;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

io.on('connection', function(socket){
  console.log('a user connected');
  // socket.emit( 'event_name', 'secure/specific message to this and only socket');
  socket.emit( 'event_name', {boxID:777, boxStatus:1    } );
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

var tree = [

    {countryID:1, countryName:'USA', cityID:1, cityName:'NY', boxID:777, boxStatus:1},
    {countryID:1, countryName:'USA', cityID:1, cityName:'NY'},
    {countryID:1, countryName:'USA', cityID:1, cityName:'NY'},
    {countryID:1, countryName:'USA', cityID:1, cityName:'NY'}
];

var data = [
    { boxID:777,data_actual:[.6, .4, 1.2] },
    { boxID:777,data_actual:[.6, .4, 1.2] },
    { boxID:777,data_actual:[.6, .4, 1.2] },
    { boxID:777,data_actual:[.6, .4, 1.2] }
];

function simulate_and_return_tree(){
    //TODO - do random row number manipulation (ex. ros 2,4)
    ////and return tree
    tree[1].boxStatus = 0;
    tree[0].boxStatus = 0;
}

function random_event_emitter() {

  //TODO - enter the real JSON

  setInterval( function(){
    io.emit("jimi", "jimi from server");
  },
               // io.emit("tree",  model) } ,
               // io.emit("data",  data) } ,
               10000 /*TODO random(5000, 30000)*/  );
  // io.emit(/emits to ALL sockets/);
}

function random(min, max){
    //TODO return random
}

http.listen(PORT, function(){
  console.log('listening on *:', PORT);
  random_event_emitter();
});
