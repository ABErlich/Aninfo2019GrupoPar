const Recurso = require('../../../model/Recurso');
const Proyecto = require('../../../model/Proyecto');
const assert = require('assert');
const { Given, When, Then, Before } = require('cucumber');

Given("tengo un recurso", function () {
    this.recurso = new Recurso('juan', 80);
});

Given("tengo un proyectoo", function () {
    this.proyecto = new Proyecto('proyectoTest', 'PYT', 'Esto es un proyecto test', 'El Lider', '');
});

When("asigno a un recurso con rol {string}, fecha de inicio {string}, fecha de fin {string}", function (rol, fechaInicio, fechaFin) {
    this.recurso.asignarProyecto(this.proyecto, rol, fechaInicio, fechaFin);
});

Then("al consultar su rol vale {string}", function (rol) {
    assert.equal(this.recurso.obtenerRolEnProyecto(this.proyecto), rol)
});

Then("al consultar su fecha de inicio vale {string}", function (fechaInicio) {
    assert.equal(this.recurso.obtenerFechaInicioEnProyecto(this.proyecto), fechaInicio);
});

Then("al consultar su fecha de fin vale {string}", function (fechaFin) {
    assert.equal(this.recurso.obtenerFechaFinEnProyecto(this.proyecto), fechaFin);
});

