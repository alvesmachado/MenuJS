var saldo = 100
var valorProduto = 0
var calcSaldo = saldo - valorProduto
// GET valores
var inputProduto = document.querySelector('#ivalor')
var precoComprado = document.querySelector('#precoComprado')
var saldoJS = document.querySelector('#saldoJS')
var subtotalFinal = document.querySelector('#subtotalFinal')
var btnCompra = document.querySelector('#btnCompra')
// var para transformar em 
var transRealPreco = valorProduto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',})
var transRealSaldoJS = saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',})
var transRealSubtotalFinal = calcSaldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',})
// Transformar número(saldo) em real. 100 = R$ 100,00
precoComprado.innerHTML = transRealPreco
saldoJS.innerHTML = transRealSaldoJS
subtotalFinal.innerHTML = transRealSubtotalFinal
inputProduto.addEventListener('input', inputProdutoValor)
btnCompra.addEventListener('click', comprar)
function inputProdutoValor(event) {
    valorProduto = Number(event.target.value)
    calcSaldo = saldo - valorProduto
    // Transformar número(input) em real. 100 = R$ 100,00
    transRealPreco = valorProduto.toLocaleString
    ('pt-BR', {style: 'currency', currency: 'BRL',})
    precoComprado.innerHTML = transRealPreco
    transRealSubtotalFinal = calcSaldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',})
    subtotalFinal.innerHTML = transRealSubtotalFinal
    if (calcSaldo < 0) {
        subtotalFinal.style.color = 'red'
    } else {
        subtotalFinal.style.color = 'green'
    }
}
function comprar() {
    if (calcSaldo >= 0) {
        saldo = calcSaldo
        transRealSaldoJS = saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',})
        saldoJS.innerHTML = transRealSaldoJS
        alert('Compra Realizada')
    } else {
        alert('Saldo insuficiente')
    }
}