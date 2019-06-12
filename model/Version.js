module.exports = class Version {
    constructor (numeroVersion) {
        this.numeroVersion = numeroVersion;
        this.features = {};
    }

    agregarFeature (nombre, descripcion) {
        this.features[nombre] = descripcion;
    }

    obtenerFeatures () {
        this.features;
    }
}
