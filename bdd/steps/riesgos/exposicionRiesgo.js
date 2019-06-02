const ConfiguracionRiesgo = require('../../../model/ConfiguracionRiesgo');
const Riesgo = require('../../../model/Riesgo');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Then("la exposicion del riesgo es {float}", function (exp) {
    assert.equal(this.riesgo.exposicion(), exp);
})
