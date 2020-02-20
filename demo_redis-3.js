'use strict';
let redis = require('redis');
let client = redis.createClient(); //creates a new client
let clc = require("cli-color");
let dateTime = require("node-datetime");
//+++++++++++++++++++++++++++++++++++
client.on('connect', function () {
    console.log('connected Redis');
});
client.on('error', function (err) {
    console.log('Something went wrong Redis ', err)
});

client.monitor(function (err, res) {
    console.log("Entering monitoring mode. Redis");
});
//-----------------------------------
//+++++++++++++++++++++++++++++++++++
// let endpointUrl = "opc.tcp://14.186.65.22:49320";
// const opcua = require("node-opcua-client");

// const client__ua = opcua.OPCUAClient.create({ endpoint_must_exist: false });
// client__ua.connect(endpointUrl);
// //-----------------------------------
// async function opc() {
//     try {
//         let dt = dateTime.create();
//         dt.format('m/d/Y H:M:S');
//         console.log(new Date(dt.now()));

//         //await client__ua.connect(endpointUrl);
//         let session = await client__ua.createSession();
//         let item = [];
//         /// Tao lenh doc tu opc  
//         // for (var j = 0; j < count_item; ++j) {
//         //     item[j] = "ns=2;s=" + itemname[j];

//         // }
//         item[0] = "ns=2;s=T0001.01.0001_VOL1";
//         let val = await session.readVariableValue(item);
//         //for (var j = 0; j < count_item; ++j) {
//         // console.log(clc.green(val[j].value.value))
//         //console.log(clc.green(val[0].statusCode._name))
//         console.log(clc.green(val[0]))
//         //}
//         //await delay(120);
//         //await client__ua.closeSession(session, true);
//         //await client__ua.disconnect();
//     }
//     catch (err) {
//         console.log('readOpcUa error !', err.message);
//     }
// }
// opc();
//setInterval(opc, 2000);

// client.on("monitor", function (time, args, raw_reply) {

//     //++++++++++++++++++++++++++++++++++
//     if (args.length > 1) {
//         console.log('length Array:', args.length);

//         console.log('Monitoring:', args);
//         if (args.length >= 6) {
//             if ((args[4] == 'mode') && (args[5] == 1)) {
//                 // writeData
//                 opc();
//                 // Ko doc du lieu nua
//                 client.hmset('0032_CTSecondary', {
//                     'mode': 0
//                 });

//                 console.log('Successed !!!!!!');
//             }
//         }



//     }
//     //--------------------------------
// });
/*


*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let endpointUrl = "opc.tcp://127.0.0.1:49320";
// let opcua = require("./node_modules/packages/node-opcua");

// const options = {
//     serverCertificate: null, // NOT KNOWN
//     defaultSecureTokenLifetime: 2000,
//     endpoint_must_exist: false,
//     keepSessionAlive: true,
//     connectionStrategy: {
//         maxRetry: 0,
//         initialDelay: 100,
//         maxDelay: 10 * 20
//     }
// };

// let client__ua = opcua.OPCUAClient.create(options);
// client__ua.on("start_reconnection", function () {
//     console.log(" ... start_reconnection")
// });
// client__ua.on("backoff", (retry, delay) => {
//     console.log(" cannot connect to endpoint retry = ", retry,
//         " next attempt in ", delay / 1000, "seconds");
// });
// client__ua.connect(endpointUrl);
// async function opc() {
//     try {

//         console.log(clc.green("--2--------------------------------------"))
//         ///await client__ua.connect(endpointUrl);
//         console.log("--2-2")
//         //let session = await client__ua.createSession({ userName: "admin", password: "12345" });
//         let session = await client__ua.createSession();
//         console.log("--3")
//         let dataValues = await session.read([{ nodeId: 'ns=5;s=T0001.01.0001_VOL1' }]) // works as expected
//         console.log(dataValues[0].toString())
//         console.log("--4")
//         //let dataValue = await session.read({ nodeId: 'ns=2;s=T0001.01.0001_VOL1' }) // DO NOT throws an error
//         console.log(dataValue.toString())
//         console.log("--5")
//         //await session.close();
//         //await client__ua.disconnect();
//     }
//     catch (err) {
//         console.log('error !', 'err.message');
//     }
// }

// setInterval(opc, 2000);
//-------------------------------------------------------------------------
// let endpointUrl = "opc.tcp://14.186.65.22:49320";
// const opcua = require("node-opcua-client");

// const client__ua = opcua.OPCUAClient.create({ endpoint_must_exist: false });
// client__ua.connect(endpointUrl);
// //let session = client__ua.createSession();
// async function opc() {
//     try {
//         let dt = dateTime.create();
//         dt.format('m/d/Y H:M:S');
//         console.log(new Date(dt.now()));

//         //await client__ua.connect(endpointUrl);
//         let session = await client__ua.createSession();
//         let item = [];
//         /// Tao lenh doc tu opc  
//         // for (var j = 0; j < count_item; ++j) {
//         //     item[j] = "ns=2;s=" + itemname[j];

//         // }
//         item[0] = "ns=2;s=T0001.01.0001_VOL1";
//         let val = await session.readVariableValue(item);
//         //for (var j = 0; j < count_item; ++j) {
//         // console.log(clc.green(val[j].value.value))
//         //console.log(clc.green(val[0].statusCode._name))
//         console.log(clc.green(val[0]))
//         //}
//         //await delay(120);
//         //await client__ua.closeSession(session, true);
//         //await client__ua.disconnect();
//     }
//     catch (err) {
//         console.log('error !', err.message);
//     }
// }

// setInterval(opc, 2000);
/////////////////////////////////////////////
// let endpointUrl = "opc.tcp://127.0.0.1:49320";
// let opcua = require("./node_modules/packages/node-opcua");
const { OPCUAClient, NodeClass } = require("./node_modules/packages/node-opcua");

const nodeId = "ns=0;i=T0001.01.0001_VOL1"; // RootFolder.Objects.Server
const endpointUri = "opc.tcp://127.0.0.1:49320";

(async () => {

    const client = OPCUAClient.create({ endpoint_must_exist: false });
    client.on("backoff", () => console.log("Backoff: trying to connect to ", endpointUri));

    await client.withSessionAsync(endpointUri, async (session) => {
        let browseResult = await session.browse({
            nodeId,
            nodeClassMask: NodeClass.Variable, // we only want sub node that are Variables
            resultMask: 63 // extract all information possible 
        });
        console.log("BrowseResult = ", browseResult.toString());
    });
})();