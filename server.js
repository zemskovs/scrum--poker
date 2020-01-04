const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
const errorHandler = require("errorhandler");
require("./models/Users");
require("./config/passport");

mongoose.promise = global.Promise;

const isProduction = process.env.NODE_ENV === "production";

const app = express();
const port = process.env.PORT || 5000;

const io = require('socket.io')();

//App Config
app.use(cors());
app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
	session({
		secret: "passport-tutorial",
		cookie: { maxAge: 60000 },
		resave: false,
		saveUninitialized: false
	})
);
// app.use(require('./routes'));//toDO: testing

if (!isProduction) {
	app.use(errorHandler());
}

mongoose.connect("mongodb://localhost/passport-tutorial"); //toDO: to universal
mongoose.set("debug", true);

// API calls
app.get("/api/rooms", (req, res) => {
	res.json({
		rooms: [
			{
				id: 1,
				title: "Первая команда"
			},
			{
				id: 2,
				title: "Вторая команда"
			},
			{
				id: 3,
				title: "Третья команда"
			},
			{
				id: 4,
				title: "Четвертая команда"
			}
		]
	});
});

if (process.env.NODE_ENV === "production") {
	// Serve any static files
	app.use(express.static(path.join(__dirname, "client/build")));

	// Handle React routing, return all requests to React app
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));
