const Tarea = require('../../../model/Tarea');
const assert = require('assert');
const { When, Then } = require('cucumber');

When("creo una tarea de titulo {string}, descripcion {string}, prioridad {string}", function (titulo, descripcion, prioridad) {
    this.tarea = new Tarea(titulo, descripcion, prioridad);
});

Then("al consultar {string} de la tarea vale {string}", function (campo, valor) {
    assert.equal(this.tarea[campo], valor);
})
