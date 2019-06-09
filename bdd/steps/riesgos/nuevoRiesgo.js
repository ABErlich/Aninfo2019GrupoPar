const ConfiguracionRiesgo = require('../../../model/ConfiguracionRiesgo');
const Riesgo = require('../../../model/Riesgo');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('tengo una configuracion de riesgos valor bajo {float}, medio {float} y alto {float}', function (valBajo, valMedio, valAlto) {
    this.configuracionRiesgo = new ConfiguracionRiesgo(valBajo, valMedio, valAlto);
})

When("creo un riesgo de motivo {string}, descripcion {string}, impacto {string}, probabilidad {string}", function (motivo, descripcion, impacto, probabilidad) {
    const valImpacto = this.configuracionRiesgo.obtenerValor(impacto);
    const valProbabilidad = this.configuracionRiesgo.obtenerValor(probabilidad);

    this.riesgo = new Riesgo(motivo, descripcion, valImpacto, valProbabilidad);
})

Then("al consultar {string} del riesgo vale {string}", function (campo, valor) {
    assert.equal(this.riesgo[campo], valor);
})

Then("al consultar {string} del riesgo vale {float}", function (campo, valor) {
    assert.equal(this.riesgo[campo], valor);
})
