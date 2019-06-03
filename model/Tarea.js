module.exports = class Tarea {
    constructor (titulo, descripcion, prioridad) {
        if (!titulo) { throw new Error('Parametro requerido: titulo'); }
        if (!descripcion) { throw new Error('Parametro requerido: descripcion'); }
        if (!prioridad) { throw new Error('Parametro requerido: prioridad'); }
        
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.estado = 'TODO';
    }

    asignarProyecto(proyecto) {
        this.proyecto = proyecto;
    }

    asignarRecurso(recurso) {
        if (this.estado !== 'TODO') { throw new Error('Estado de tarea no permite asignarse'); }
        if (this.asignado) { throw new Error('Tarea ya asignada'); }
        this.asignado = recurso;
    }
}