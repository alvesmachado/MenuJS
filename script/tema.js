document.querySelector('#btn_tema').addEventListener('click', clicar_tema)

function clicar_tema() {
            if (window.document.querySelector('#btn_tema').innerText == "sunny") {
                window.document.querySelector('#btn_tema').innerText = "moon_stars"
                window.document.querySelector('body').classList.add('darktheme')
            }
            else {
                window.document.querySelector('#btn_tema').innerText = "sunny"
                window.document.querySelector('body').classList.remove('darktheme')
            }
        }