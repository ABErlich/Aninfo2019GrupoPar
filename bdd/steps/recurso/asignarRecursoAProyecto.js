const Recurso = require('../../../model/Recurso');
const Proyecto = require('../../../model/Proyecto');
const assert = require('assert');
const { Given, When, Then, Before } = require('cucumber');

Given("tengo un recurso llamado {string}", function (nombre) {
    this.recurso = new Recurso(nombre, 80);
});

Given("tengo un proyecto llamado {string}", function (nombre) {
    this.proyecto = new Proyecto(nombre, 'PYT', 'Proyecto generado a partir de mejoras en la nube', 'Eleonora Sol', '');
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

<<<<<<< HEAD
Given("tengo dos proyectos llamados {string} y {string}", function (nombre1, nombre2) {
    this.proyecto1 = new Proyecto(nombre1, 'p1', 'Esto es la descripcion del proyecto', 'Juan Pedro', '');
    this.proyecto2 = new Proyecto(nombre2, 'p2', 'Esto es la descripcion del proyecto', 'Rodolfo Saga', '');
    this.proyecto3 = new Proyecto(nombre2, 'p3', 'Esto es la descripcion del proyecto', 'Marcela Son', '');
=======
Given("tengo dos proyectos de codigo {string} y {string}", function (cod1, cod2) {
    this.proyectos = {};
    this.proyectos[cod1] = new Proyecto(cod1, cod1, cod1, cod1, cod1);
    this.proyectos[cod2] = new Proyecto(cod2, cod2, cod2, cod2, cod2);
>>>>>>> 0440da41d71c086ce70bbd9bd5356992da811dcf
});

When("asigno a un recurso con rol {string}, fecha de inicio {string}, fecha de fin {string}, al proyecto {string}, disponibilidad {int}", function (rol, fechaInicio, fechaFin, codProy, disponibilidad) {
    try {
        this.recurso.asignarProyecto(this.proyectos[codProy], rol, fechaInicio, fechaFin, disponibilidad);
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