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
//++++++++++++++++++++++++++++++++
//let endpointUrl = "opc.tcp://14.169.69.211:49320";
let endpointUrl = "opc.tcp://127.0.0.1:49320";
let opcua = require("node-opcua-client");
const options = {
    serverCertificate: null, // NOT KNOWN
    defaultSecureTokenLifetime: 2000,
    endpoint_must_exist: false,
    keepSessionAlive: true,
    connectionStrategy: {
        maxRetry: 5,
        initialDelay: 100,
        maxDelay: 10 * 1000
    }
};
let client__ua = opcua.OPCUAClient.create(options);
client__ua.on("backoff", (retry, delay) => {
    console.log(" cannot connect to endpoint retry = ", retry,
        " next attempt in ", delay / 1000, "seconds");
});


//--------------------------------
async function opcReadTag() {
    try {
        let dt = dateTime.create();
        dt.format('m/d/Y H:M:S');
        console.log(new Date(dt.now()));

        //await client__ua.connect(endpointUrl);

        let session = await client__ua.createSession();
        let item = [];
        let keyname = [];
        let countTagname = 3
        let nameChanel = 'T0003'
        let nameDevice = '01'
        //item[0] = "ns=2;s=T0001.01.0001_VOL1";

        item[0] = `ns=2;s=${nameChanel}.${nameDevice}.0001_VOL1`;
        //item[1] = `ns=2;s=${nameChanel}.${nameDevice}.0002_VOL2`;
        //item[2] = `ns=2;s=${nameChanel}.${nameDevice}.0003_VOL3`;

        keyname[0] = `${nameChanel}.${nameDevice}.0001_VOL1`;
        keyname[1] = `${nameChanel}.${nameDevice}.0002_VOL2`;
        keyname[2] = `${nameChanel}.${nameDevice}.0003_VOL3`;

        let val = await session.readVariableValue(item);
        countTagname = 1;
        //console.log(clc.green(val[0].statusCode._name))
        for (let i = 0; i < countTagname; i++) {

            console.log(keyname[i]);

            if (val[i].statusCode._name == 'Bad') {
                console.log(clc.green(val[i]))
                client.hmset(keyname[i],
                    {
                        'Value': '',
                        'statusCode': val[i].statusCode._name,
                        'serverTimestamp': '',
                        'sourceTimestamp': ''
                    });
            }
            if (val[i].statusCode._name == 'Good') {
                console.log(clc.green(val[i]))
                //console.log(clc.green(val[0].value.value))

                client.hmset(keyname[i],
                    {
                        'Value': val[i].value.value,
                        'statusCode': val[i].statusCode._name,
                        'serverTimestamp': '',
                        'sourceTimestamp': ''
                    });
            }

        }




    }
    catch (err) {
        console.log('readOpcUa error !', err.message);
    }
}
// 
client__ua.connect(endpointUrl, function (err) {
    if (err) {
        console.log("cannot connect to endpoint :", endpointUrl);
    } else {
        console.log("connected !");
        //opcReadTag();
        setInterval(opcReadTag, 2000);
    }
});