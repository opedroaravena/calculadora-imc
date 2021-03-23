const pessoa = {
    nome: 'Pedro',
    idade: 23,
    tecnologia: 'Javascript'
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}