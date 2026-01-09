var anoAtual = new Date().getFullYear()
var campoAno = document.querySelector('#iano')
var result = document.querySelector('#pessoaResult')

document.querySelector('#genderBtn').addEventListener('click', clicar)

function clicar() {
    const anoNasc = Number(campoAno.value)
    const maleGet = document.getElementsByName('gender')
    document.body.classList.remove('femi')
    if (anoNasc >= anoAtual || campoAno.value.length == 0) {
        alert('Error: Ano inexistente ou valor nulo')
        para.setAttribute('src', 'image/night.jpg')
        pro.appendChild(para)
    } else {
        const anoCalc = anoAtual - anoNasc
        if (maleGet[0].checked) {
            document.body.classList.add('masc')
            if (anoCalc >= 18 && anoCalc < 60){
                result.innerHTML = `A pessoa é um homem adulto de ${anoCalc} anos`
            } else if (anoCalc >= 60) {
                result.innerHTML = `A pessoa é um idoso de ${anoCalc} anos`
            } else {
                result.innerHTML = `A pessoa é um menino de ${anoCalc} anos`
            }
        } else {
            document.body.classList.add('femi')
            if (anoCalc >= 18 && anoCalc < 60){
                result.innerHTML = `A pessoa é uma mulher adulta de ${anoCalc} anos`
            } else if (anoCalc >= 60) {
                result.innerHTML = `A pessoa é uma idosa de ${anoCalc} anos`
            } else {
                result.innerHTML = `A pessoa é uma menina de ${anoCalc} anos`
            }
        }
    }
    
}
