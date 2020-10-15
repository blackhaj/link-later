// Import env variables from .env
process.env.NODE_ENV === "development" && require('dotenv').config()

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const { sequelize } = require("./sequelize")

// Set up APP
const app = express();
const PORT = process.env.PORT || 3000;

console.log("PORT", process.env.PORT)

// Global Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Route delegations
// app.use("/api/signup", signUp);

// // App Routes
// if (process.env.NODE_ENV === "production") {
//   app.use("/build", express.static(path.join(__dirname, "../build")));
  
// }

// // Wildcard route
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../index.html'));
// });


// // 404 Handler
// app.use((req, res) => {
//   res.status(404).send("Page not found");
// });

// // Global Error Handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
