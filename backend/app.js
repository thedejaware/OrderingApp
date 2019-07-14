// Require express
const express = require("express");

// Require mongoose
const mongoose = require("mongoose");

// Require body parser
const bodyParser = require("body-parser");

// Require http
const http = require("http");

//instance of express
const app = express();

// Create HTTP server.
const server = http.createServer(app);

// Require socket.io and listen server
const io = require("socket.io").listen(server);

// instance of orders route
const ordersRoute = require("./routes/orders/order.route");

// Connect to DB
const dbConnection = "mongodb://localhost/OrderDB";
mongoose.connect(dbConnection, { useNewUrlParser: true });

//Checking connected status
mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


//To parse JSON data, we are using body-parser
//body-parser middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// using orders route
app.use("/orders", ordersRoute);

// Initialize Socket IO connection
require("./socket/streams")(io);

const port = process.env.PORT || 3000;

// listening our port / starting server
server.listen(port, () => {
  console.log("Node server is started");
});
