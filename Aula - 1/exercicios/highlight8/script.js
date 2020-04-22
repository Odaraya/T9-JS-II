/*
  Exercício bônus
  -----------

  Marque todas as palavras que possuem mais de 8 caracteres com um um background amarelo.

  Dica: pesquise sobre o método de string split, e os métodos de array map e join para ajudar na sua solução.
    
*/
const paragrafo = document.querySelector('p')
//console.log(paragrafo.innerText)
const arrayPalavras = paragrafo.innerText.split("")  // o slipt quebra uma string em um array
console.log(arrayPalavras)



