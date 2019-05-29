const Proyecto = require('../../../model/Proyecto');
const Tarea = require('../../../model/Tarea');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given("tengo un proyecto de nombre {string}, codigo {string}, descripcion {string}, lider {string}", function (nombre, codigo, descripcion, lider) {
    this.proyecto = new Proyecto(nombre, codigo, descripcion, lider);
});

When("creo una tarea de titulo {string}, descripcion {string}, prioridad {string}", function (titulo, descripcion, prioridad) {
    this.tarea = new Tarea(titulo, descripcion, prioridad);
});

Then("al consultar {string} de la tarea vale {string}", function (campo, valor) {
    assert.equal(this.tarea[campo], valor);
})
