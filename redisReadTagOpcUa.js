'use strict';
let redis = require('redis');
let clc = require("cli-color");
let dateTime = require("node-datetime");
let client = redis.createClient(); //creates a new client
client.on('connect', function () {
    console.log('connected Redis');
});
client.on('error', function (err) {
    console.log('Something went wrong  Redis ', err)
});
let nameChanel = 'T0003'
let nameDevice = '01'

client.hgetall(`${nameChanel}.${nameDevice}.0001_VOL1`, function (err, object) {


    try {
        console.log(object.statusCode);
    } catch (err) {
        console.log('Error :', err.message)
    }
});