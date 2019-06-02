class ConfiguracionRiesgo {
    constructor(valBajo, valMedio, valAlto) {
        this.valores = { }
        this.valores[this.KEY_BAJO] = valBajo;
        this.valores[this.KEY_MEDIO] = valMedio;
        this.valores[this.KEY_ALTO] = valAlto;
    }

    obtenerValor(key) {
        const val = this.valores[key];
        if (!val) {
            throw new Error(`${key} inválido`);
        }

        return val;
    }
}

// constantes estáticas
ConfiguracionRiesgo.prototype.KEY_BAJO = 'BAJO';
ConfiguracionRiesgo.prototype.KEY_MEDIO = 'MEDIO';
ConfiguracionRiesgo.prototype.KEY_ALTO = 'ALTO';

module.exports = ConfiguracionRiesgo;