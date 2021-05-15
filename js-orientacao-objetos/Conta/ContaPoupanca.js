import {Conta} from "./Conta.js"; 

//Herança
export class ContaPoupanca extends Conta {
    constructor(saldoInicial, agencia, cliente) {
        super(saldoInicial, agencia, cliente);
    }
    
    sacar(valor){
        let taxa = 1.01;
        return this._sacar(valor, taxa); 
    }
}