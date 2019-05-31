const Proyecto = require('../../../model/Proyecto');
const assert = require('assert');
const { Given, When, Then, Before } = require('cucumber');

Given("tengo un proyecto", function () {
});

Given('tengo un proyecto de codigo {string}, descripcion {string}, lider {string}', function (codigo, descripcion, lider) {
    this.crearProyecto(null, codigo, descripcion, lider, null);
});

Given('tengo un proyecto de nombre {string}, descripcion {string}, lider {string}', function (nombre, descripcion, lider) {
    this.crearProyecto(nombre, null, descripcion, lider, null);
});

Given('tengo un proyecto de nombre {string}, codigo {string}, lider {string}', function (nombre, codigo, lider) {
    this.crearProyecto(nombre, codigo, null, lider, null);
});

Given('tengo un proyecto de nombre {string}, codigo {string}, descripcion {string}', function (nombre, codigo, descripcion) {
    this.crearProyecto(nombre, codigo, descripcion, null, null);
});

Given('tengo un proyecto de nombre {string}, codigo {string}, descripcion {string}, lider {string}, requerimientos {string}', function (nombre, codigo, descripcion, lider, requerimientos) {
    this.crearProyecto(nombre, codigo, descripcion, lider, requerimientos);
});

When("creo el proyecto", function () {
})

Then("al consultar {string} del proyecto vale {string}", function (campo, valor) {
    if (campo == 'requerimientos') {
        assert.equal(this.proyecto[campo].join(','), valor);
    } else {
        assert.equal(this.proyecto[campo], valor);
    }
})

Then("deberia obtener un error que diga {string}", function (mensaje) {
    assert.equal(this.error, mensaje);
})