//Arrow Function
const soma = (a,b) => a + b
console.log(soma(2,3))

//Arrow Function (this)
// o this em arrow function esta relacionado ao local que a funcao foi escrita - this aponta para exports
// o this em uma funçao tradicional aponta para a global
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) // tentando apontar para outro objeto
lexico1()
lexico2()
 
// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('sou mais forte!')

// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))