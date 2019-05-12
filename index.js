const express = require('express')
const path = require('path')
const { Pool } = require('pg');
const PORT = process.env.PORT || 5000

// Inicializo la coneccion con la BDD
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
  });
var app = express();

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))


// Endpoint para probar la BDD
app.get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })




  // Cualquier otro request que pida y no sea parte de mi api
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public/index.html'));
});

// Lanzo el servidor
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

