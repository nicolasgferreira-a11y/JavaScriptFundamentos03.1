function apresentar(nome){
    console.log(`Ola, ${nome}`)
}
apresentar("Nicolas")

function somar(a , b ){
    console.log(`${a} + ${b} = ${a+b}`)
}

somar(8, 15)

function apresentar(nome = "Visitante"){
    console.log(`Ola, ${nome}`)

}

apresentar()
apresentar("Vitor")