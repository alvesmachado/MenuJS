var hora = new Date().getHours()
var tema = document.querySelector('#btn_tema')
tema.addEventListener('click', clicar_tema)

function clicar_tema() {
            if (tema.innerText == "sunny") {
                tema.innerText = "moon_stars"
                window.document.querySelector('body').classList.add('darktheme')
            }
            else {
                tema.innerText = "sunny"
                window.document.querySelector('body').classList.remove('darktheme')
            }
        }

if (hora >= 19 || hora <= 5 && window.document.querySelector('#btn_tema').innerText == "sunny") {
    clicar_tema()
} 