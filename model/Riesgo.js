module.exports = class Riesgo {
    constructor(motivo, descripcion, impacto, probabilidad) {
        this.motivo = motivo;
        this.descripcion = descripcion;
        this.impacto = impacto;
        this.probabilidad = probabilidad;
    }

    exposicion() {
        const val = this.impacto * this.probabilidad;
        return parseFloat(val.toFixed(3)); // redondear a 3 decimales
    }
}