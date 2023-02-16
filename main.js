'use strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class="item"></div>'
// }

const adicionarCard = (nome, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class="aluno_nome">${nome}</h2>
                        <span class="aluno_nota">${nota}</span>`



// mensagens de erro                       
if(nome == '' || nota == ''){
    alert('VAZIO')
}else if(isNaN(nota)){
    alert('Digite um número')
}else if(Number(nome)){
    alert('Digite apenas palavras')
} else if(nota < 0 || nota > 10){
    alert('Essa nota não existe')
}


// Validsação se tirar maior que 5 fica azul, se tirar menor fica vermelho    
    else{              
    if (nota < 5) {
        novaDiv.classList.add('vermelho')
    } else {
        novaDiv.classList.add('azul')
    } 

    // mensagem de erro entrada vazia
   

container.appendChild(novaDiv)
}
}

const handleClick = () => {
    const nome = prompt('Digite o nome do Aluno')
    const nota = prompt('Digite a nota do Aluno')
    adicionarCard(nome, nota)
}

adicionar.addEventListener('click', handleClick)