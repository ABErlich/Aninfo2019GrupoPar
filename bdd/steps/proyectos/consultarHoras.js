const Proyecto = require('../../../model/Proyecto');
const assert = require('assert');
const { When, Then } = require('cucumber');


When('consulto las horas consumidas en el proyecto {string}', function (proyecto) {
});

Then('el resultado es {int} horas', function (horasEsperadas) {
    assert.equal(this.proyecto.consultarHoras(), horasEsperadas);
});
