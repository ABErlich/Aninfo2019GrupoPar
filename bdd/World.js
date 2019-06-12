const Proyecto = require('../model/Proyecto');
const Producto = require('../model/Producto');
const { setWorldConstructor } = require('cucumber')


function CustomWorld() {
    this.parametros = {};
    this.proyecto = null;
    this.error = null;
    this.tarea = null;
    this.configuracionRiesgo = null;
    this.riesgo = null;

    this.productos = {};

    this.crearProyecto = function (nombre, codigo, descripcion, lider, requerimientos) {
        try {
            this.proyecto = new Proyecto(nombre,
                                        codigo,
                                        descripcion,
                                        lider,
                                        requerimientos);
        } catch (e) {
            this.error = e.message;
        }
    }

    this.crearProducto = function (nombre, descripcion) {
        this.productos[nombre] = new Producto(nombre, descripcion);
        return this.productos[nombre];
    }
}

setWorldConstructor(CustomWorld)