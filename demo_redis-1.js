var redis = require('redis');
var client = redis.createClient(); //creates a new client
client.on('connect', function () {
    console.log('connected');
});
client.on('error', function (err) {
    console.log('Something went wrong ', err)
});
// client.set('framework', 'AngularJS', function (err, reply) {
//     console.log(reply);
// });
// client.get('framework', function (err, reply) {
//     console.log(reply);
// });
// client.exists('framework', function (err, reply) {
//     if (reply === 1) {
//         console.log('exists');
//     } else {
//         console.log('doesn\'t exist');
//     }
// });
// client.del('framework', function (err, reply) {
//     console.log(reply);
// });
// client.hmset('0032_CTSecondary', {
//     'Value': '40',
//     'Timestamp': '14:40:36',
//     'Quality': 'Bad',
//     'UpdateCount': '0',
//     'mode': 0
// });
// client.hmset('0032_CTSecondary', {
//     'mode': 1
// });
// client.hgetall('0032_CTSecondary', function (err, object) {
//     console.log(object.Value);

// });
// client.del('0032_CTSecondary', function (err, reply) {
//     console.log(reply);
// });

// client.hmset('0032_CTSecondary', {
//     'Value': '40',
//     'Timestamp': '14:40:36',
//     'Quality': 'Bad',
//     'UpdateCount': '0',
//     'mode': 0
// });

// client.config('set', 'notify-keyspace-events', 'KEhA');
// client.subscribe('__keyevent@0__:set');
// // you can target a specific key with a second parameter
// // example, client_redis.subscribe('__keyevent@0__:set', 'mykey')\
// client.on('message', function (channel, key) {
//     // do what you want when a value is updated
//     console.log('------');

// });

// client.config('set', 'notify-keyspace-events', 'KEA');
// client.subscribe('__keyevent@0__:*');
// // you can target a specific key with a second parameter
// // example, client_redis.subscribe('__keyevent@0__:set', 'mykey')\
// client.on('message', function (channel, key) {
//     // do what you want when a value is updated
//     console.log('------');

// });

// client.hmset('0032_CTSecondary', {
//     'mode': 1
// });
// client.hgetall('0032_CTSecondary', function (err, object) {
//     // console.log(object.Value);

// });
client.monitor(function (err, res) {
    console.log("Entering monitoring mode.");
});


client.on("monitor", function (time, args, raw_reply) {
    console.log(time + ": " + args); // 1458910076.446514:['set', 'foo', 'bar']

});