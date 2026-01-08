var anoAtual = new Date().getFullYear()
var campoAno = document.querySelector('#iano')
var maleGet = document.querySelector('#imasc')
var femaleGet = document.querySelector('#ifemi')
var result = document.querySelector('#pessoaResult')
var bodyGet = document.querySelector('body')

document.querySelector('#genderBtn').addEventListener('click', clicar)

function clicar() {
    const anoNasc = Number(campoAno.value)
    bodyGet.classList.remove('masc')
    bodyGet.classList.remove('femi')
    if (anoNasc <= anoAtual) {
        const anoCalc = anoAtual - anoNasc
        if (maleGet.checked) {
            result.innerHTML = `A pessoa é um homem de ${anoCalc} anos`
            bodyGet.classList.add('masc')
        } else if (femaleGet.checked) {
            result.innerHTML = `A pessoa é uma mulher de ${anoCalc} anos`
            bodyGet.classList.add('femi')
        }
    } else {
        alert('Error: Ano inexistente')
    }
    
}
