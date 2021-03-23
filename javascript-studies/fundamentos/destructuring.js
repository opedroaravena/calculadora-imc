// function rand ({min = 0, max = 100}) {
//     const valor = Math.random() * (max-min) + min
//     return Math.floor(valor);
// }

// console.log(rand({min: 0, max: 10}))
// usando objetos

// var obj = {
//     nome: "Pedro",
//     idade: 23,
//     tecnologia: "javascript"
// }

// var {nome: n, idade: i} = obj;
// console.log(`${n} ${i}`);

// const[a] = [10]
// console.log(a)

// const[n1, ,n2, , n3, n4 = 0] = [10, 2, 30, 22]
// console.log(n1,n2,n3,n4)

// const[, [, nota]] = [[3,4,5],[2,4,5]]
// console.log(nota)

function rand ([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([70, 60]))