module.exports = class Ticket {
    constructor(nroCliente, cliente, tipo, producto, vProducto, severidad, estado, asunto, descripcion, responsable) {
        this.nroCliente = nroCliente;
        this.cliente = cliente;
        this.tipo = tipo;
        this.producto = producto;
        this.vProducto = vProducto;
        this.severidad = severidad;
        this.estado = estado;
        this.asunto = asunto;
        this.descripcion = descripcion;
        this.responsable = responsable;
    }
}