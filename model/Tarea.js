module.exports = class Tarea {
    constructor (titulo, descripcion, prioridad) {
        if (!titulo) { throw new Error('Parametro requerido: titulo'); }
        if (!descripcion) { throw new Error('Parametro requerido: descripcion'); }
        if (!prioridad) { throw new Error('Parametro requerido: prioridad'); }
        
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
    }
}