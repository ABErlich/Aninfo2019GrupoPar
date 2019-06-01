const Proyecto = require('../../../model/Proyecto');
const { Given } = require('cucumber');

Given("tengo un proyecto de nombre {string}, codigo {string}, descripcion {string}, lider {string}", function (nombre, codigo, descripcion, lider) {
    this.proyecto = new Proyecto(nombre, codigo, descripcion, lider);
});