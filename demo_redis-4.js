var redis = require('redis');
var client = redis.createClient(); //creates a new client
client.on('connect', function () {
    console.log('connected Redis');
});
client.on('error', function (err) {
    console.log('Something went wrong  Redis ', err)
});

// client.hmset('0032_CTSecondary', {
//     'Value': '40',
//     'Timestamp': '14:40:36',
//     'Quality': 'Bad',
//     'UpdateCount': '0',
//     'mode': 0
// });

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

// client.hmset('0032_CTSecondary', {
//     'Value': 40,
//     'mode': 1
// });
// client.hgetall('0032_CTSecondary', function (err, object) {
//     console.log(object.Value);
// });
// Xoa tat ca cac key
client.flushdb(function (err, succeeded) {
    console.log(succeeded); // will be true if successfull
});
//++++++++++++++++++++++++++++++++++++
