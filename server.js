const express = require('express'); // import express.js
const routes = require('./routes'); // import /api/routes for all models
// import sequelize connection
const sequelize = require('./config/connection');

const app = express(); // instanciates express
const PORT = process.env.PORT || 3001; // PORT: environment variable or default 3001

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes); // express to use /api/routes

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log(`Now listening on Port: ${PORT}`));
});
