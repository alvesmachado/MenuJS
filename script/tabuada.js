const tabuada = document.querySelector('#doaArt .tabuada') 
const btnMultiplicar = document.querySelector('#btnMulti')
btnMultiplicar.addEventListener('click', multiplicar)
function multiplicar() {
    let multiplicando = document.querySelector('#inputMultiplicando')
	tabuada.innerHTML = '<span class="tabuadaStyle">Tabuada</span>'
	if (multiplicando.value.trim().length != 0){
		for (let multiplicador = 1;multiplicador <= 10;multiplicador++) {
			let multiplicacao = Number(multiplicando.value) * multiplicador
			let novaTabuada = document.createElement('span')
			novaTabuada.className = 'tabuadaStyle'
			novaTabuada.innerHTML = `${multiplicando.value} x ${multiplicador} = ${multiplicacao}`
			tabuada.appendChild(novaTabuada)
    	} 
	} else {
		alert('Erro: Número vazio')
	}      
}