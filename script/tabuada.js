const tabuada = document.querySelector('#doaArt .tabuada') 
const btnMultiplicar = document.querySelector('#btnMulti')
btnMultiplicar.addEventListener('click', multiplicar)
function multiplicar() {
    const multiplicando = Number(document.querySelector('#inputMultiplicando').value)
    for (let multiplicador = 1;multiplicador <= 10;multiplicador++) {
	const multiplicacao = multiplicando * multiplicador
	const novaTabuada = document.createElement('span')
	novaTabuada.className = 'tabuadaStyle'
	novaTabuada.innerHTML = `${multiplicando} x ${multiplicador} = ${multiplicacao}`
	tabuada.appendChild(novaTabuada)
    }    
}
