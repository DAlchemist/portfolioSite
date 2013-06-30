var cluster  = require('cluster');
var config   = require('./config/config');
var chokidar = require('chokidar');
var cpuCount = require('os').cpus().length;


// Create a worker for each CPU
for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
}

var numberOfClosedWorkers = 0;


// Listen for dying workers
cluster.on('exit', function (worker) {
    numberOfClosedWorkers++;
    if( numberOfClosedWorkers > config.maxWorkers ) return;

    // Replace the dead worker,
    // we're not sentimental
    console.log('Worker ' + worker.id + ' died :(');
    cluster.fork();

});


var watcher = chokidar.watch( __dirname );

watcher.on('change', function(path, stats) {
    console.log('--- file change detected, restarting app ---');
    numberOfClosedWorkers = 0;

    for( var w in cluster.workers ) {
        if( cluster.workers[w].kill ) {
            cluster.workers[w].kill();
        } else {
            cluster.workers[w].destroy();
        }
    }
});

console.log("listening on port", config.port );