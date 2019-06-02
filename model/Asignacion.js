module.exports = class Asignacion {
    constructor(proyecto, rol, fechaInicio, fechaFin) {
        if (!proyecto) { throw new Error('Parametro requerido: Proyecto'); }
        if (!rol) { throw new Error('Parametro requerido: Rol'); }
        if (!fechaInicio) { throw new Error('Parametro requerido: Fecha de Inicio'); }
        if (!fechaFin) { throw new Error('Parametro requerido: Fecha Fin'); }

        this.proyecto = proyecto;
        this.rol = rol;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}