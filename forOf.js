for (let letra of "Coder"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// for in - corre em cima de indice
for(let i in assuntosEcma){
    console.log(i)
}

// for of - corre em cima de valores
for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map',{abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])
// chaves e valor do Map
for (let assunto of assuntosMap){
    console.log(assunto)
}
//chaves do Map
for (let chave of assuntosMap.keys() ){
    console.log(chave)
}
//valores do Map
for (let valor of assuntosMap.values()){
    console.log(valor)
}

//desestruturando , retorna chave e valor separados
for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch,vl)
}

//usando Set
const s = new Set(['a','b','c'])
for (let letra of s){
    console.log(letra)
}