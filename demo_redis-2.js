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
client.hmset('0032_CTSecondary', {
    'mode': 1
});
// client.hgetall('0032_CTSecondary', function (err, object) {
//     console.log(object.Value);

// });
// client.set('0032_CTSecondary', '222', function (err, reply) {
//     console.log(reply);
// });
// client.get('0032_CTSecondary', function (err, reply) {
//     console.log(reply);
// });

// client.del('0032_CTSecondary', function (err, reply) {
//     console.log(reply);
// });
//client.hset("hash key", "hashtest 1", "some value", redis.print);
//client.set('foo', 'bar');

////