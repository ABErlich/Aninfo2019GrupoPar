const Riesgo = require('../../../model/Riesgo');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('tengo un riesgo de motivo {string}, descripcion {string}, impacto {string}, probabilidad {string}', function (motivo, descripcion, impacto, probabilidad) {
    const valImpacto = this.configuracionRiesgo.obtenerValor(impacto);
    const valProbabilidad = this.configuracionRiesgo.obtenerValor(probabilidad);

    this.riesgo = new Riesgo(motivo, descripcion, valImpacto, valProbabilidad);
});

When('agrego el riesgo al proyecto', function () {
    this.proyecto.agregarRiesgo(this.riesgo);
});

Then('al consultar los riesgos el proyecto tiene {int} riesgo', function (cant) {
    assert.equal(this.proyecto.riesgos.length, cant);
});
