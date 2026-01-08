var hora = new Date().getHours()
var mensagemHora = document.querySelector('#horamsg')
var imgHora = document.querySelector('#imagehora')
var headerTime = document.querySelector('header')

if (hora < 12) {
    mensagemHora.innerHTML = `Bom dia! Agora é ${hora}h` 
    imgHora.src = 'image/morning.jpg'
    headerTime.style.background = '#597e14ff'
    document.body.style.background = '#88af5bff'
} else if (hora < 18) {
    mensagemHora.innerHTML = `Boa tarde! Agora é ${hora}h` 
    imgHora.src = 'image/aftermoon.jpg'
    headerTime.style.background = '#ff6600ff'
    document.body.style.background = '#ffc59fff'
} else {
    var titleCor = document.querySelector('#projeto > h1')
    mensagemHora.innerHTML = `Boa noite! Agora é ${hora}h` 
    imgHora.src = 'image/night.jpg'
    headerTime.style.background = '#091D28'
    document.body.style.background = '#2E4F4B'
    titleCor.style.color = "white"
}