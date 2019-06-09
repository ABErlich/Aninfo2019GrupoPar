const Recurso = require('../../../model/Recurso');
const assert = require('assert');
const { Given, When, Then, Before } = require('cucumber');

Given("Soy gerente de operaciones", function(){});

When("creo un recurso de nombre {string}, horas de contrato {int}", function (nombre, horasDeContrato) {
    this.recurso = new Recurso(nombre, horasDeContrato);
});

Then("al consultar {string} del recurso es {string}", function (campo, valor) {
    assert.equal(this.recurso[campo], valor);
});

Then("al consultar {string} del recurso es {int}", function (campo, valor) {
    assert.equal(this.recurso[campo], valor);
});