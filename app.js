var express = require("express");
var bodyParser = require("body-parser");
var Pusher = require("pusher");

var pusher = new Pusher({
    app_id: "1659650",
    key: "8790afb5e24f5aa48bd1",
    secret: "336095bd9cb074fc31b2",
    cluster: "eu",
    useTLS: true,
});

var app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/pusher/auth", function (req, res) {
    res.send("Hello pusher!");
});

app.post("/pusher/auth", function (req, res) {
    var socketId = req.body.socket_id;
    var channel = req.body.channel_name;
    var auth = pusher.authorizeChannel(socketId, channel);
    res.send(auth);
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Example app listening on port 5000!");
});

module.exports = app;
