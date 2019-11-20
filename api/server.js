const express = require('express');
const server = express();

// const carsRouter = require('../cars/cars-router.js')

server.use(express.json());
// server.use('/api/cars', carsRouter);

server.get('/',(req,res) => {
    res.send("<h1>webdb-ii-challenge</h1>")
  })

module.exports = server;
