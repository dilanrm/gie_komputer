const path = require("path");
// Import express
const express = require("express");
// Import cors
const cors = require("cors");
// Import connection
const db = require("./config/database.js");
// Import router
const router = require("./routes/");

// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "static")));

const port = process.env.PORT || 3000;

// use router
app.use(router);

// listen on port
app.listen(port, () => console.log("App Listening on port", port));
