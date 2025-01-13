import './style.css'

console.warn('Ejercicio A');
let cantidadDeGatos= prompt('Ingrese el numero de emojis de gatitos a ver')
let emojis = ['😺', '😽', '😹'];

function publicarGatitos(cantidadDeGatos) {
    for (let i = 0; i < cantidadDeGatos; i++) {
        let emoji = emojis[i % emojis.length]; 
        console.log(`Gato #${i + 1}: ${emoji}`); 
    }
}

publicarGatitos(cantidadDeGatos)

console.warn('Ejercicio B');

let verCantidadDeGatos = prompt('Ingrese el numero de gatitos que quiere ver')
let verCantidadDePasos = prompt('Ingrese el numero de pasos que hara cada gatito')
 

function publicarGatitosYSusPasos(verCantidadDeGatos, verCantidadDePasos) {
    for (let i = 1; i <= verCantidadDeGatos; i++) {
        console.log('Gato #'+i+':'+'🐈'+ saberCuantosPasos(verCantidadDePasos));
        
    }
}

function saberCuantosPasos(verCantidadDePasos) {
    let cadena = '';
    for (let index = 0; index < verCantidadDePasos; index++) {
        cadena= cadena + '🐾'
    }
    return cadena;
}
publicarGatitosYSusPasos(verCantidadDeGatos, verCantidadDePasos)



console.warn('Ejercicio C');

let emojisGatoYCaja = ['🐈','🐈⬛']


function publicarGatitosYSusPasos2(verCantidadDeGatos, verCantidadDePasos) {
    for (let i = 1; i <= verCantidadDeGatos; i++) {
        let emojiElegido = emojisGatoYCaja[(i - 1) % emojisGatoYCaja.length]; 
        console.log('Gato #' + i + ': ' + emojiElegido + ' ' + saberCuantosPasos(verCantidadDePasos));
        
    }
}

publicarGatitosYSusPasos2(verCantidadDeGatos, verCantidadDePasos)