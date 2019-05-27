const Proyecto = require('../../../model/Proyecto');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given("tengo un proyecto", function () {
    this.parametros = {};
});

Given("tiene {string} {string}", function (campo, valor) {
    this.parametros[campo] = valor;
})

When("creo el proyecto", function () {
    try {
        this.proyecto = new Proyecto(this.parametros.nombre, 
            this.parametros.codigo, 
            this.parametros.descripcion, 
            this.parametros.lider);
    } catch (e) {
        this.error = e.message;
    }
})

Then("al consultar {string} vale {string}", function (campo, valor) {
    assert.equal(this.proyecto[campo], valor);
})

Then("deberia obtener un error que diga {string}", function (mensaje) {
    assert.equal(this.error, mensaje);
})