function getInteiro (min,max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiro(-1,10) 
    console.log(`sua opção é: ${opcao}`)
} while(opcao != -1)

console.log(`Adeus.`)