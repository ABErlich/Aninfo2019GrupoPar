const express = require('express')
const path = require('path')
const { Pool } = require('pg');
const PORT = process.env.PORT || 5000

const connection = process.env.DATABASE_URL || "dbname=davq6n49u5pfrv host=ec2-54-235-208-103.compute-1.amazonaws.com port=5432 user=fbsflgvxxizcrp password=c79a52cff6c6648f93a9a66b10bbac8942469af44605d35d14c2b9efe9872c02 sslmode=require";

//Inicializo la conexion con la BDD
const pool = new Pool({
    connectionString: connection
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

