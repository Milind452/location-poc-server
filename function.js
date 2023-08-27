"use strict";

var Pusher = require("pusher");

var pusher = new Pusher({
    app_id: "1659650",
    key: "8790afb5e24f5aa48bd1",
    secret: "336095bd9cb074fc31b2",
    cluster: "eu",
    encrypted: true,
});

exports.auth = (req, res) => {
    var socketId = req.body.socket_id;
    var channel = req.body.channel_name;
    var auth = pusher.authenticate(socketId, channel);
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST");
    res.send(auth);
};
