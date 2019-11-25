function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

// quando usa o operador new está se apontando para o prototype
const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 426)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, ...params)
    return obj
}

const aula3 = novo(Aula, 'bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)