function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
 
        setTimeout( () => resolve(),tempo)
     })
}
/*
esperarPor(2000)
    .then(()=> console.log('Executando uma promise 1...'))
    .then(esperarPor)
    .then(()=> console.log('Executando uma promise 2...'))
    .then(esperarPor)
    .then(()=> console.log('Executando uma promise 3...'))
*/

function retronarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar(){
    let valor = await retronarValor()

    await esperarPor(1500) // quando uso await o retorno é valor, senao seria uma promise
    console.log(`Async/Await ${valor}`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}`)

    return valor + 3 // quando sai do sincronismo uso "then" para mostrar
}

executar().then(console.log)