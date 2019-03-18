var MQTT = require("async-mqtt");

const topic = process.env.TOPIC || 'jiaxi/relay'

var publicServer = MQTT.connect(process.env.SRC_HOST || "tcp://broker.mqttdashboard.com:1883");
var privateServer = MQTT.connect(process.env.DEST_HOST || "tcp://test.mosquitto.org:1883");

publicServer.on("connect", async () => {
	console.log("Connected");
	try {
		await publicServer.subscribe(topic);
    console.log("Subcribe topic: ", topic);    
	} catch (e){
		console.log('ERROR')
		console.log(e.stack);
	}
})

publicServer.on("message", async (topic, message) => {
  // console.log('onMessage:')
	// console.log(message.toString())
	try {
		await privateServer.publish(topic, message);
    // console.log("Sent to private server.");
	} catch (e){
		console.log(e.stack);
		process.exit();
	}
})


