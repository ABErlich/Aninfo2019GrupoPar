const ConfiguracionRiesgo = require('./ConfiguracionRiesgo');

module.exports = class Proyecto {
    constructor (nombre, codigo, descripcion, lider, requerimientos) {
        if (!nombre) { throw new Error('Parametro requerido: nombre'); }
        if (!codigo) { throw new Error('Parametro requerido: codigo'); }
        if (!descripcion) { throw new Error('Parametro requerido: descripcion'); }
        if (!lider) { throw new Error('Parametro requerido: lider'); }
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.lider = lider;

        this.requerimientos = requerimientos ? requerimientos.split(',') : null;
        this.tareas = [];
        this.riesgos = [];

        this.configuracionRiesgo = new ConfiguracionRiesgo(0, 0, 0, 1);
    }

    agregarTarea (tarea) {
        this.tareas.push(tarea);
    }

    agregarRiesgo (riesgo) {
        this.riesgos.push(riesgo);
    }

    asignarConfiguracionRiesgo (config) {
        this.configuracionRiesgo = config;
    }

    enRiesgo () {
        if (!this.riesgos.length) {
            return false;
        }

        const umbral = this.configuracionRiesgo.obtenerUmbral();

        for (const riesgo of this.riesgos) {
            if (riesgo.exposicion() > umbral) {
                return true;
            }
        }

        return false;
    }
}