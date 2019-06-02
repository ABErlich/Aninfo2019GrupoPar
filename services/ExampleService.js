const BaseService = require('./BaseService');

class ExampleService extends BaseService  {
    constructor () {
        super();
    }

    async GetFromDB() {
        const client = await super.GetPool().connect();
        const result = await client.query('SELECT * FROM test_table');
        const results = { 'results': (result) ? result.rows : null};
        return results;
    }

}



module.exports = ExampleService