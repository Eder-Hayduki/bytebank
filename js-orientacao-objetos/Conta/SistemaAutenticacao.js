//Polimorfismo 
// - Ser usuario significa ter propriedade senha.
// - Usuário: cliente ou funcionario(gerente/diretor)

export class SistemaAutenticacao {
    static login(usuario, senha) {
        if(SistemaAutenticacao.ehAutenticavel(usuario)){
            return usuario.autenticar(senha); //boolean
        }
        return false;
    }
    static ehAutenticavel(usuario){
        //verificando se o método autenticar está dentro de usuário.
        return "autenticar" in usuario && 
        //verificar se o método é um function
        usuario.autenticar instanceof Function;
    }
}