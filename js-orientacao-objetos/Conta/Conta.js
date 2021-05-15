//Classe abstrata
export class Conta {

    constructor(saldoInicial, agencia, cliente) {

        //restringindo que seja criado um objeto do tipo conta pois a classe abstrata deve ser somente herdada não instanciada.
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente pois essa é uma classe ABSTRATA");
        }

        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //método abstrato - usado só para ser herdado.
    sacar(valor) {
        throw new Error("Deve se implementar o método sacar na classe");
    }

    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}