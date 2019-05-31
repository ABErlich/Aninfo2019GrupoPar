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
    }

    agregarTarea (tarea) {
        this.tareas.push(tarea);
    }
}