const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))
// Vistas
app.set('views', path.join(__dirname, 'views'));

// Configuro el view engine
app.set('view engine', 'ejs')

// Hago un get
app.get('/', (req, res) => res.render('pages/index'))

// Lanzo el servidor
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
