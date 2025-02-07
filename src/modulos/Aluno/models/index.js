
export class Aluno {
    #matricula
    constructor(matricula, nome, email, senha ){
        this.matricula = matricula
        this.nome = nome
        this.email = email
        this.senha = senha

    }
//Modificador de Acessso
    get getMatricula(){
        return this.#matricula
    }

   

}

