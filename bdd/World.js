const Proyecto = require('../model/Proyecto');
const { setWorldConstructor } = require('cucumber')

function CustomWorld() {
    this.parametros = {};
    this.proyecto = null;
    this.error = null;

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
}

setWorldConstructor(CustomWorld)