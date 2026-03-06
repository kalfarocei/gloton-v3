const gloton = document.getElementById('gloton')
const points = document.getElementById('points')

const btnSubirNivel = document.getElementById('btn-subir-nivel')
const btnAlimentar = document.getElementById('btn-alimentar')

btnSubirNivel.style.display = 'none'

let conteoPuntos = 0
let puntosNeeded = 10
let nivel = 1



btnAlimentar.addEventListener('click', () => {
    if (conteoPuntos < puntosNeeded) {
        conteoPuntos++
        points.innerText = conteoPuntos
        btnSubirNivel.style.display = "none";
    } else {
        gloton.classList.remove("ri-emotion-unhappy-fill");
        gloton.classList.add("ri-emotion-fill");
        btnSubirNivel.style.display = "block";
    }

}

)


btnSubirNivel.addEventListener('click', () => {
    nivel++
    points.innerText = conteoPuntos
    gloton.style.fontSize = `calc(3rem + ${conteoPuntos}rem)`
    btnSubirNivel.style.display = 'none'
    puntosNeeded += 10

})
