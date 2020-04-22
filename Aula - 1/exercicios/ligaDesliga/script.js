/*
  Exercício 1
  -----------

  Liga e desliga

  1. selecione a imagem do documento.
  2. selecione o body do documento. 
  3. crie a função "changeBg", essa função deve alterar o background do body quando o usuário clicar na imagem.

    
*/
const img = document.querySelector('img')
const back  = document.body // document.querySelector('body')
const h1 = document.querySelector('h1')

  backgroundColor.style.backgroundColor="black"
function changeBg(){
  if (back.style.backgroundColor =="white"){
    back.style.backgroundColor ="black"
    h1.innerText = "Desligado"
    console.log("Desligado")
  }else{
    back.style.backgroundColor ="white"
    h1.innerText= "ligado"
    console.log("ligado")
  }
  
}

