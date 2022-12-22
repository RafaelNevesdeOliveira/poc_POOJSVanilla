## EXPRESSAO REGULAR
function validaCodigo(codigo) {

    // cria a expressão regular. Poderíamos ter usado 
    // a sintaxe new RegExp(/\D{3}-\D{2}-\d{2}/)
    // \D é qualquer coisa não dígito
    // \D{3} é qualquer coisa não dígito que forme um grupo de 3 caracteres
    // \d é qualquer dígito.
    let expressao = /\D{3}-\D{2}-\d{2}/; 

    // toda expressão regular possui o método test 
    // que recebe o alvo do teste, retornando true
    // se passou, e false se falhou
    if(expressao.test(codigo)) {
          alert('Código válido!');
      } else {
          alert('Código inválido');
      }

}

Para ficar ainda melhor, vamos alterar a expressão para

/^\d{4}-\d{2}-\d{2}$/COPIAR CÓDIGO
O ˆ indica "começando com " e o $ "terminando com".

## FIM

## Como podemos evitar que alguém instancie uma classe que só possui métodos estáticos, ou seja, uma classe que não faz sentido trabalharmos com uma instância? Reflita sobre isso. Clicando em continuar você verá a resposta do instrutor.

VER OPINIÃO DO INSTRUTOR
Opinião do instrutor

Podemos lançar um erro dentro do constructor. Lembre-se que o constructor é chamando quando criamos uma instância de uma classe com o operador new.

class ClasseQualquer {

    constructor() {
        throw new Error('Você não pode criar uma instância dessa classe');
    }

       // métodos estáticos da classe
}

## FIM