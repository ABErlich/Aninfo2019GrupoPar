const Portafolio = require('../../../model/Portafolio');
const Proyecto = require('../../../model/Proyecto');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given("tengo un portafolio", function () {
    this.portafolio = new Portafolio();
});

When("agrego el proyecto al portafolio", function () {
    try {
        this.portafolio.agregarProyecto(this.proyecto);
    } catch (e) {
        this.error = e.message;
    }
});

Then("al consultar los proyectos el portafolio tiene 1 proyecto", function () {
    assert.equal(this.portafolio.obtenerProyectos().length, 1);
});

Then("el proyecto tiene codigo {string}", function (codigo) {
    let proyecto = this.portafolio.obtenerProyectos()[0];
    assert.equal(proyecto.codigo, codigo);
})

Given('ya existe un proyecto en el portafolio con codigo {string}', function (codigo) {
    let otroProyecto = new Proyecto('otro nombre', codigo, 'otra desc', 'otro lider');
    this.portafolio.agregarProyecto(otroProyecto);
});
