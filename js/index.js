const gloton = document.getElementById('gloton')
const points = getElementById('points')

const btnSubirNivel = document.getElementById('btn-subir-nivel')
btnSubirNivel.style.display = 'none'

let conteoPuntos = 0
let puntosNeeded = 10
let nivel = 1

function alimentar() {
    if (conteoPuntos < puntosNeeded) {
        conteoPuntos+
        points.innerText = conteoPuntos
        btnSubirNivel.style.display = 'none'
    } else {
        btnSubirNivel.style.display = 'block'
        gloton.classList.remove('ri-emotion-unhappy-fill')
        gloton.classList.add('ri-emotion-happy-fill')
    }
}
function subirNivel() {
    nivel++
    points.innerText = conteoPuntos
    gloton.style.fontSize = `calc(3rem + ${conteoPuntos}rem)`
    btnSubirNivel.style.display = 'none'
    puntosNeeded = 10
}



