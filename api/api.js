const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ExampleService = require('../services/ExampleService');

var jsonParser = bodyParser.json();

// TODO
// Aca deberia meter algun tipo de inyeccion de dependencias
var exampleService = new ExampleService();

// Endpoint para probar la BDD
router.get('/db', async (req, res) => {
    try {
        
        var results = await exampleService.GetFromDB();
        
        res.send(results);

    } catch (err) {
      res.send("Error " + err);
    }
  })



  module.exports = router;