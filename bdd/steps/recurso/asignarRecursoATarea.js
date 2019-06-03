const Recurso = require('../../../model/Recurso');
const Tarea = require('../../../model/Tarea');
const Proyecto = require('../../../model/Proyecto');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('tengo un recurso asignado a un Proyecto', function () {
   this.recurso = new Recurso('oliva', 40);
   this.proyecto = new Proyecto('nombreTest', 'NT', 'es una descripcion', 'Requerimientos');
   this.recurso.asignarProyecto(this.proyecto, 'desarrollador', '03/06/19', '03/07/19');
});

Given('tengo una tarea asignada a un Proyecto', function () {
    this.tarea = new Tarea('tareaTest', 'esto es una prueba de tarea', 'alta');
    this.tarea.asignarProyecto(this.proyecto);
});

Given('tengo otro recurso{int} asignada a la tarea', function (int) {
   this.recurso2 = new Recurso('olivaOtra', 40);
   this.recurso2.asignarProyecto(this.proyecto, 'desarrollador', '03/06/19', '03/07/19');
   this.recurso.asignarTarea(this.tarea);
});

When('asigno la tarea a el recurso', function () {
    try{
        this.bool = this.recurso.asignarTarea(this.tarea);
    }catch(err){
        this.error = err.message;
    }
});

Then('al consultar el asignado a la tarea es el recurso', function () {
    assert.equal(this.bool,true);
    assert.equal(this.tarea.asignado, this.recurso);
});

