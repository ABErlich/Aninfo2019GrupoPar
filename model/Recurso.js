const Asignacion = require('./Asignacion');

module.exports = class Recurso {
    constructor(nombre, horasDeContrato) {
        if (!nombre) { throw new Error('Parametro requerido: nombre'); }
        if (!horasDeContrato) { throw new Error('Parametro requerido: horasDeContrato'); }

        this.nombre = nombre;
        this.horasDeContrato = horasDeContrato;
        this.estado = "Disponible";
        this.legajo = 1;
        this.proyectos = [];
    }

    asignarProyecto(proyecto, rol, fechaInicio, fechaFin) {
        this.proyectos.push(new Asignacion(proyecto, rol, fechaInicio, fechaFin));
    }

    obtenerRolEnProyecto(proyecto) {
        var rolEnProyecto;
        this.proyectos.forEach(asignacion => {
            if (asignacion.proyecto == proyecto) {
                rolEnProyecto = asignacion.rol;
            }
        });
        return rolEnProyecto;
    }

    obtenerFechaInicioEnProyecto(proyecto) {
        var fechaInicioEnProyecto;
        this.proyectos.forEach(asignacion => {
            if (asignacion.proyecto == proyecto){
                fechaInicioEnProyecto = asignacion.fechaInicio;
            }
        });
        return fechaInicioEnProyecto;
    }

    obtenerFechaFinEnProyecto(proyecto) {
        var fechaFinEnProyecto;
        this.proyectos.forEach(asignacion => {
            if (asignacion.proyecto == proyecto){
                fechaFinEnProyecto = asignacion.fechaFin;
            }
        });
        return fechaFinEnProyecto;
    }
}