// diferença entre while e for
let contador = 1
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}

// for é mais compacto
for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

// for em array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(i = 0; i < notas.length; i++){
    console.log(`notas = ${notas[i]}`)
}