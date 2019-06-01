module.exports = class Proyecto {
    constructor () {
        this.dicProyectos = {};
    }

    agregarProyecto (proyecto) {
        if (this.dicProyectos[proyecto.codigo]) {
            throw Error(`Ya exise un proyecto con codigo "${proyecto.codigo}"`);
        }

        this.dicProyectos[proyecto.codigo] = proyecto;
    }

    obtenerProyectos () {
        let proyectos = [];
        for (let codigo in this.dicProyectos) {
            proyectos.push(this.dicProyectos[codigo]);
        }
        return proyectos
    }
}