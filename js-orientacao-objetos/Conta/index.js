import { Diretor } from "./funcionario/Diretor.js";
import { Gerente } from "./funcionario/Gerente.js";
import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Mateus", 10000, 12345678901);
diretor.cadastrarSenha("123456789");
const logOnDiretor = SistemaAutenticacao.login(diretor , "123456789");

const gerente = new Gerente("Ricardo", 5000, 98765432109);
gerente.cadastrarSenha("123456");
const logOnGerente = SistemaAutenticacao.login(gerente, "123456");

const cliente = new Cliente("Laís", 19283746546, "1234")
const LogOnCliente = SistemaAutenticacao.login(cliente, "123"); 


console.log(logOnDiretor);
console.log(logOnGerente);
console.log(LogOnCliente);