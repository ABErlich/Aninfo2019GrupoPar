const assert = require('assert');
const Version = require('../../../model/Version');
const { Given, When, Then } = require('cucumber');


Given('existe una cartera con los siguientes productos', function (dataTable) {
    for (let fila of dataTable.hashes()) {
        let nombre = fila['nombre'];
        let descripcion = fila['descripcion'];
        this.crearProducto(nombre, descripcion);
    }
});


When('consulto el listado de productos', function () {
});


Then('se muestran los productos', function (dataTable) {
    for (let [nombre] of dataTable.raw()) {
        assert.ok(this.productos[nombre]);
    }
});


Given('el producto {string} tiene las versiones', function (nombreProducto, dataTable) {
    let producto = this.crearProducto(nombreProducto, 'sin descripcion');

    for (let [numberoVersion] of dataTable.raw()) {
        let version = new Version(numberoVersion);
        producto.agregarVersion(version);
    }
});


When('cuando consulto las versiones existentes del producto {string}', function (nombreProducto) {
    // guarda el nombre del producto al cual se quieren consultar las versiones
    this.nombreProductoConsultado = nombreProducto;
});


Then('se muestran las versiones', function (dataTable) {
    const producto = this.productos[this.nombreProductoConsultado];

    for (let [version] of dataTable.raw()) {
        assert.ok(producto.versiones[version]);
    }
});
