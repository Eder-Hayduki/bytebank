//impedir a utilização do sacar do Conta. tem que dar erro.
import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(agencia, cliente) {
        super(0, agencia, cliente);
    }

    sacar(valor) {
        let taxa = 1
        return this._sacar(valor, taxa);
    }
}
