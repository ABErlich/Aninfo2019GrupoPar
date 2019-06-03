const Proyecto = require('../../../model/Proyecto');
const { Given, When, Then } = require('cucumber');


Given('el desarrollador llamado {string} trabajó {int} horas', function (nombre, cantidadHoras) {
    return this.proyecto.asignarRecurso(nombre, cantidadHoras);
});
