const Recurso = require('../../../model/Recurso');
const Tarea = require('../../../model/Tarea');
const Proyecto = require('../../../model/Proyecto');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

When('cambio el estado de la tarea', function () {
    this.tarea.cambiarEstado();
});

Then('al el estado de la tarea obtengo {string}', function (estado) {
    assert.equal(this.tarea.estado, estado);
});