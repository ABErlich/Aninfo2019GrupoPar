module.exports = class Asignacion {
    constructor(proyecto, rol, fechaInicio, fechaFin, disponibilidad) {
        if (!proyecto) { throw new Error('Parametro requerido: Proyecto'); }
        if (!rol) { throw new Error('Parametro requerido: Rol'); }
        if (!fechaInicio) { throw new Error('Parametro requerido: Fecha de Inicio'); }
        if (!fechaFin) { throw new Error('Parametro requerido: Fecha Fin'); }
        if (!disponibilidad) { throw new Error('Parametro requerido: Disponibilidad'); }

        this.proyecto = proyecto;
        this.rol = rol;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.disponibilidad = disponibilidad;
    }
}