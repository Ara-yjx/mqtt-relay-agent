# MQTT Relay Agent

## Try me

An instance of this demo is already running on yejiaxi.cn,
subscribing topic "jiaxi/relay" from broker.mqttdashboard.com and re-publishing to test.mosquitto.org.


1.  Go to <http://www.hivemq.com/demos/websocket-client/> to simulate a home monitor (subscriber). 

    Input "broker.mqttdashboard.com" in [Host] and click [Connect] on the right. Then, click [Add New Topic Subscription] on the right. Input "jiaxi/relay" in [Topic] and click [Subscribe].

2.  In another tab, open <http://www.hivemq.com/demos/websocket-client/> to simlate a public sensor (publisher). 

    Input "test.mosquitto.org" in [Host], "8080" in [Port], and click [Connect] on the right. Then, input "jiaxi/relay" in [Topic] and write something in [Message], and click [Publish]. 

3.  Now, whatever you publish in the public sensor will appear in the private subscriber.



**Architecture**

| Role | Demo Instance |
|:---:|:---:|
| Public Sensor | www.hivemq.com/demos/websocket-client/|
| ↓ ||
| Public Server | broker.mqttdashboard.com | 
| ↓ ||
| Relay Agent | this program on yejiaxi.cn | 
| ↓ ||
| Home Server | test.mosquitto.org |
| ↓ ||
| Home Monitor | www.hivemq.com/demos/websocket-client/ |



## Installation

1.  Install Node.js (v8.0 or higher recommended) and npm

2.  Clone this repository

3.  In project directory, install dependencies 

    `$ npm i`

5.  Launch program

    `$ node index.js`

    or launch with custom configuration by setting environment variables, e.g. 

    `$ TOPIC="mytopic" SRC_HOST="myhost" node index.js`  


## Custom Configuration

| Variable | Default value | Description |
|:--|:--|:--|
| TOPIC | jiaxi/relay | topic to subscibe and re-publish |
| SRC_HOST | tcp://broker.mqttdashboard.com:1883 | the server to subscribe from |
| DEST_HOST | tcp://test.mosquitto.org:1883 | the server to publish to |