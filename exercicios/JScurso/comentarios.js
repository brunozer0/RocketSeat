

/* String

// Cadeia de caracteres 

"" // aspas duplas
'' // aspas simples 
`` // template literals  ou template strings 

------------------------------------------------
Number

Números 

33// inteiros 
12.5 // reais - float
NaN // Not a Number
Infinity //infinito 
=================================

Booleans 

* somente 2 valors 

    TRUE // verdadeiro
    falase//falso



=============================
*Undefined 
    *indefinido



*null

    *Nullo
    *  objeto que não possui conteúdo
    * diferente de indefinido 
    * 
=============================

* OBJECT

        *Objeto
        *Propriedades / atributos
        *Funcionalidades / Métodos 
        {proproedade: "valor"}

======================================

*array (vetores)
    * Uma lista
    * Agrupamento de dado

        ["bruno", 36]


/*

================================================
# Tipos de dados 

Conforme o ECMAScript  standard temos  9 tipos de dados: 

* Data types 

        *Primitive / value 
        *Structural
        *Structurarl primitive 

## Primitivos 

*String
*number
*Boolean
*Undefined
*Symbol
*BigInt

----------------------
## Estruturais

* Object 

        * Array 
        * Map
        * Set
        * Date
        * ...
    
OBJETOS SÃO TIPOS ESTRUTURAIS QUE RECEBE PROPRIEDADES, Q SÃO OS ATRIBUTOS E RECEBE FUNCIONALIDADES, Q SÃO OS MÉTODOS
 --------------------------
* Function



--------------------------------

##Primitivo Estrutural / Structural Root Primitive

    * null

O null é ao mesmo tempo primitivo e estrutural, estrutural porque ele define que teria q haver um objeto porem não tem
=================================================================================================================

#VARIÁVEIS 

    *SÃO NOMES SIMBOLICOS PARA RECEBER ALGUM VALOR 
    *ATALHOS DE  CÓDIGO
    *IDENTIFICADORES 

--------------------------------
* 3 PALAVRAS RESERVADAS PARA SE CRIAR UMA VARIÁVEL

        * var 
        * let 
        * const 
    
 * Const ou constante não pode alterar o seu valor durante a aplicação.

================================================================

 O JS É UMA LINGUAGEM FRACAMENTE TIPADA  E DINÂMICA 

 - Variáveis  não precisam ter um tipo previamente definido
 
 - Podemos mudar o conteúdo da variável 
 
 ==============================================

 # SCOPE 

 * ESCOPO DETERMINA A VISIBILIDADE DE ALGUMA VARIÁVEL NO JS 

 # Block statment (declaração de bloco)
 ``
 // vamos iniciar um bloco 

 {
    -> qualquer código



 }  ->  aqui fechamos o bloco

 O bloco também criará um novo escopo. Chamamos então de `block-scoped`


==========================================================================

## VAR 
``` js 

// var  é global e poderá funcionar fora de um escopo de bloco 


console.log ('> existe x antes do bloco?', x)

{
    var x = 0
}
console.log('> existe x depois do bloco?', x)

=============================================================

## LET E CONST  
``JS
// const e let são locais e só funcionam dentro do escopo onde foi criada 
========================================================

PARA CRIAR NOMES 

    * Js é case-sensitive (sensível ao caso)
    * JS aceita a cadeia de carácteres unicode  
-------------------------------------------------
- POSSO :
    *Iniciar com esses carácteres especiais: $ _
    *Iniciar com letras 
    *Colocar acentos 
    *Letras maiúsculas e minúsculas FAZEM DIFERENÇA

-------------------------------------------------------
- NÃO POSSO: 

        *Iniciar com números 
        *Colocar espaços vazios no nome 

-------------------------------------------------------
- IDEAL: 

    *Criar nomes que faça sentido 
    *Que explique o que a variável É ou FAZ
    *camelCase
    *snake_case
    *Escrever em inglês 
*/