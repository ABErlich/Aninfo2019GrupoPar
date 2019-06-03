const ConfiguracionRiesgo = require('../../../model/ConfiguracionRiesgo');
const Riesgo = require('../../../model/Riesgo');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('el proyecto tiene una configuracion de riesgos valor bajo {float}, medio {float}, alto {float}, umbral {float}', function (valBajo, valMedio, valAlto, umbral) {
    this.config = new ConfiguracionRiesgo(valBajo, valMedio, valAlto, umbral);

    this.proyecto.asignarConfiguracionRiesgo(this.config);
});

Given('el proyecto tiene un riesgo de motivo {string}, descripcion {string}, impacto {string}, probabilidad {string}', function (motivo, descripcion, impacto, probabilidad) {
    const valImpacto = this.config.obtenerValor(impacto);
    const valProbabilidad = this.config.obtenerValor(probabilidad);

    this.riesgo = new Riesgo(motivo, descripcion, valImpacto, valProbabilidad);
    this.proyecto.agregarRiesgo(this.riesgo);
});

When('consulto si el proyecto esta en riesgo', function () {
    this.enRiesgo = this.proyecto.enRiesgo();
});

Then('obtengo que el proyecto no lo esta', function () {
    assert.ok(!this.enRiesgo);
});

Then('obtengo que el proyecto lo esta', function () {
    assert.ok(this.enRiesgo);
});