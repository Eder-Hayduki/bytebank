import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js"
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const conta2 = new ContaPoupanca(100, 1002, cliente2); // n pode fazer isso.
conta2.sacar(50);

console.log(contaCorrenteRicardo);
console.log(conta2);

const conta3 = new ContaSalario(1001, cliente2);
conta3.depositar(300);
conta3.sacar(100); //sacar da classe conta

console.log(conta3);