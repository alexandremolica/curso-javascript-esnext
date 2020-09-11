//let e const
{
    var a = 2
    let b = 3
}

console.log(a)
//console.log(b) nao esta definida pelo scopo de let

// template string
// Usando ` `  obedece a interpolação de string e quebra de linha do codigo 
const produto = 'iPad'
console.log(`${produto} é 
caro!`)

//Destructuring
const [l, e, ...tras] = "Coder" // l=C, e=o e tras = array [d, e, r]
console.log(l,e,tras)

const [x, ,y] = [1,2,3]
console.log(x,y)

const {idade : i, nome } = {nome: 'Ana', idade:9}
console.log(i,nome)
