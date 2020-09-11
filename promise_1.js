
//utilizei arrow function
const primeiroElemento =  array => array[0]
const primeiraLetra = string =>  string[0]
const letraMinuscula = letra => letra.toLowerCase()

// promise -- compromisso (function(resolve)) que vai se realizar no futuro (.then)
new Promise(function(resolve){
    resolve(['Ana','Bia', 'Carlos', 'Daniel'])//recebe 1 parametro, no caso um array
} )
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)