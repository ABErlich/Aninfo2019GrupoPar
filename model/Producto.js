module.exports = class Producto {
    constructor (nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.versiones = {};
    }

    agregarVersion (version) {
        this.versiones[version.numeroVersion] = version;
    }

    obtenerVersiones () {
        return this.versiones.values();
    }
}
