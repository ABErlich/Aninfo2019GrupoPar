const assert = require('assert');
const { Then } = require('cucumber');

Then("deberia obtener un error que diga {string}", function (mensaje) {
    assert.equal(this.error, mensaje);
})