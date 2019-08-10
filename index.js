let bluetoothctl = require("./bluetoothctl_lib/bluetoothctl.js");

let counter = 0;

bluetoothctl.exec(
    "begin",
    undefined,
    function(data) {
        console.log( "BEGIN SUCCESS", data );
        resolve();
    },
    function(err) {
        console.log( "BEGIN FAILED", err )
    }
);


function resolve(data) {
    data && console.log(++counter, "DATA", data);
    bluetoothctl.exec(
        "devicesWithInfo",
        {
            seconds: 10
        },
        resolve,
        reject
    );

}

function reject(err) {
    err && console.log("ERR", err);
}
