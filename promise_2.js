//setTimeout - funcao padrao que executa 

setTimeout(function(){
    console.log('Executando callback...')
    
    // outro setTimeout
    setTimeout(function(){
        console.log('Executando callback...')
        setTimeout(function(){
            console.log('Executando callback...')
        },2000)
    
    },2000)

}, 2000) // após 2 segundos é executada a funcao


//substituindo codigo acima usando promise
function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
 
        setTimeout(function(){
            console.log('Executando uma promise...')
            resolve('Vishhhh')
        },tempo)
     })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)

