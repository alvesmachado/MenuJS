let topContagem = 1
const topContainer = document.querySelector('#doaArt > .container')

while (topContagem <= 50) {
    const novoSpan = document.createElement('span')
    novoSpan.className = 'topPessoa celTop'
    novoSpan.innerHTML = topContagem
    topContainer.appendChild(novoSpan)
    topContagem++
} 

const novoFinal = document.createElement('span')
novoFinal.style.gridColumn = '1 / -1'
novoFinal.style.textAlign = 'center'
novoFinal.style.margin = '10px 0px'
novoFinal.innerHTML = `<strong>Obrigado pela ajuda!</strong>`
topContainer.appendChild(novoFinal)

