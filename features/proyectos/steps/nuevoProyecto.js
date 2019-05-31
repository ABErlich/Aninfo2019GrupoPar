const Proyecto = require('../../../model/Proyecto');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given("tengo un proyecto", function () {
    this.parametros = {};
    this.proyectos = {};
});

Given("tiene {string} {string}", function (campo, valor) {
    this.parametros[campo] = valor;
});

When("creo el proyecto", function () {
    try {
        if(this.proyectos[this.parametros.codigo]) throw new Error('Parametro erroneo: codigo repetido');
        this.proyecto = new Proyecto(this.parametros.nombre, 
            this.parametros.codigo, 
            this.parametros.descripcion, 
            this.parametros.lider,
            this.parametros.requerimientos);
    } catch (e) {
        this.error = e.message;
    }
})

Then("al consultar {string} del proyecto vale {string}", function (campo, valor) {
    if(campo === 'requerimientos') assert.equal(this.proyecto[campo].join(','), valor);
    else assert.equal(this.proyecto[campo], valor);
    
})

Then("deberia obtener un error que diga {string}", function (mensaje) {
    assert.equal(this.error, mensaje);
})