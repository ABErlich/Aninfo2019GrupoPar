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

    estimarHoras(horas) {
        this.horasEstimadas = horas;
    }

    cambiarEstado() {
        switch(this.estado) {
            case 'TODO':
                this.estado = 'DOING';
                break;
            case 'DOING':
                this.estado = 'DONE';
                break;
            case 'DONE':
                throw new Error('Tarea finalizada, no hay transicion de estado posible.');
                break;
            default:
                break;
        }
    }

    asignarProyecto(proyecto) {
        this.proyecto = proyecto;
    }

    asignarRecurso(recurso) {
        if (this.estado !== 'TODO') { throw new Error('Estado de tarea no permite asignarse'); }
        if (this.asignado) { throw new Error('Tarea ya asignada'); }
        if (this.horasEstimadas > recurso.horasDeContrato) { throw new Error('Recurso sobreasignado'); }
        this.asignado = recurso;
    }
}