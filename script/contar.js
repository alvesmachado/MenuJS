const btnContar = document.querySelector('#btnContar')
const resultado = document.querySelector('.resultadoContar')

btnContar.addEventListener('click', contar)
function contar() {
	var inicio = document.querySelector('#iinicio')
	var fim = document.querySelector('#ifim')
	var passo = document.querySelector('#ipasso')
    resultado.innerHTML = ''
	if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo.value == 0) {
        alert('Erro: Número impossível')
    } else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        var contagem = inicio
        if (fim < inicio) {
            while (contagem >= fim) {
                var novoSpan = document.createElement('span')
                novoSpan.innerHTML = (fim <= contagem - passo) ? `${contagem} <span class="material-symbols-outlined">arrow_right_alt</span> ` : `${contagem} <span class="material-symbols-outlined">flag</span>`
                resultado.appendChild(novoSpan)
                contagem = contagem - passo
            }
        } else {
            while (contagem <= fim) {
                var novoSpan = document.createElement('span')
                novoSpan.innerHTML = (contagem + passo <= fim) ? `${contagem} <span class="material-symbols-outlined">arrow_right_alt</span> ` : `${contagem} <span class="material-symbols-outlined">flag</span>`
                resultado.appendChild(novoSpan)
                contagem = contagem + passo
            }
        }
    }
}