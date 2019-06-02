module.exports = class Riesgo {
    constructor(motivo, descripcion, impacto, probabilidad) {
        this.motivo = motivo;
        this.descripcion = descripcion;
        this.impacto = impacto;
        this.probabilidad = probabilidad;
    }
}