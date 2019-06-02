const { Pool } = require('pg');

class BaseService{

    constructor() {
        //Inicializo la conexion con la BDD
        this.connection = process.env.DATABASE_URL || "postgres://fbsflgvxxizcrp:c79a52cff6c6648f93a9a66b10bbac8942469af44605d35d14c2b9efe9872c02@ec2-54-235-208-103.compute-1.amazonaws.com:5432/davq6n49u5pfrv";
        this.pool = new Pool({
            connectionString: this.connection,
            ssl: true
        });
        
    }
    
    GetPool(){
        return this.pool;
    }

}


module.exports = BaseService