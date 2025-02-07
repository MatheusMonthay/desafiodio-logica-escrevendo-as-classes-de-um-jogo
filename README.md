# Classificador de Nível de Herói

## 📖 Descrição

Este projeto foi desenvolvido como parte do desafio **"Classificador de Nível de Herói"** da DIO. O objetivo é criar uma classe em JavaScript que represente um herói de aventura com características como nome, idade e tipo, e um método de ataque que exibe uma mensagem personalizada com base no tipo de herói.

## 🚀 Funcionalidades

- Criar uma classe `Heroi` com as propriedades: nome, idade e tipo.
- O herói pode ser de um dos seguintes tipos: **guerreiro**, **mago**, **monge**, ou **ninja**.
- Implementar um método `atacar()` que exibe a mensagem de ataque de acordo com o tipo de herói:
  - **Mago**: "usou magia"
  - **Guerreiro**: "usou espada"
  - **Monge**: "usou artes marciais"
  - **Ninja**: "usou shuriken"
- Exibir a mensagem final no formato: `"O {tipo} atacou usando {ataque}"`.

## 💻 Exemplo de Saída

Aqui está um exemplo de como o código pode ser utilizado e a saída que ele gera:

```javascript
const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
heroi1.atacar(); // Saída: "O guerreiro atacou usando espada"

const heroi2 = new Heroi('Merlin', 150, 'mago');
heroi2.atacar(); // Saída: "O mago atacou usando magia"
