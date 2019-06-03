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

When("asigno a un recurso con rol {string}, fecha de inicio {string}, fecha de fin {string}, disponibilidad {int}", function (rol, fechaInicio, fechaFin, disponibilidad) {
    this.recurso.asignarProyecto(this.proyecto, rol, fechaInicio, fechaFin, disponibilidad);
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

Then("al consultar su disponibilidad vale {string}", function (disponibilidad) {
    assert.equal(this.recurso.obtenerDisponibilidadEnProyecto(this.proyecto), disponibilidad);
});

Given("tengo dos proyectos", function () {
    this.proyecto1 = new Proyecto('p1', 'p1', 'Esto es un proyecto test', 'El Lider', '');
    this.proyecto2 = new Proyecto('p2', 'p2', 'Esto es un proyecto test', 'El Lider', '');
    this.proyecto3 = new Proyecto('p3', 'p3', 'Esto es un proyecto test', 'El Lider', '');
});

When("asigno a un recurso con rol {string}, fecha de inicio {string}, fecha de fin {string}, al proyecto p1, disponibilidad {int}", function (rol, fechaInicio, fechaFin, disponibilidad) {
    this.recurso.asignarProyecto(this.proyecto1, rol, fechaInicio, fechaFin, disponibilidad);
});

When("asigno a un recurso con rol {string}, fecha de inicio {string}, fecha de fin {string}, al proyecto p2, disponibilidad {int}", function (rol, fechaInicio, fechaFin, disponibilidad) {
    this.recurso.asignarProyecto(this.proyecto2, rol, fechaInicio, fechaFin, disponibilidad);
});

When("asigno a un recurso con rol {string}, fecha de inicio {string}, fecha de fin {string}, al proyecto p3, disponibilidad {int}", function (rol, fechaInicio, fechaFin, disponibilidad) {
    try {
        this.recurso.asignarProyecto(this.proyecto3, rol, fechaInicio, fechaFin, disponibilidad);
    } catch (err) {
        this.error = err.message;
    }
});

Then("el recurso se encuentra asignado en {string}", function (codigoProyecto) {
    assert.equal(this.recurso.estaEnProyecto(codigoProyecto), true);
});

Then("el recurso no se encuentra asignado en {string}", function (codigoProyecto) {
    assert.equal(this.recurso.estaEnProyecto(codigoProyecto), false);
});