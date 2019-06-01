const Proyecto = require('../../../model/Proyecto');
const Tarea = require('../../../model/Tarea');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('tengo una tarea de titulo {string}, descripcion {string}, prioridad {string}', function (titulo, descripcion, prioridad) {
    this.tarea = new Tarea(titulo, descripcion, prioridad);
});

When('agrego la tarea {string} al proyecto', function (string) {
    this.proyecto.agregarTarea(this.tarea);
});

Then('al consultar las tareas el proyecto tiene {int} tarea', function (int) {
    assert.equal(this.proyecto.tareas.length, 1);
});
