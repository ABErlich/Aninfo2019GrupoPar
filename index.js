const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5000

var app = express();

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

// Inicializo rutas de la api
app.use('/api', require('./api/api'));
// errores
app.use(function(error, req, res, next){
    res.status(422).send({ error: error.message });
})

// Cualquier otro request que pida y no sea parte de mi api
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public/index.html'));
});

// Lanzo el servidor
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

