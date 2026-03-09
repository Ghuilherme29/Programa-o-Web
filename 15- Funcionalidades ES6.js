//Novos recursos ES6

// Vetor de números.
const listadenumeros = [1,2,3,4,5]

console.log("Exibindo números do vetor: ")
console.log(listadenumeros)

console.log("\nMultiplicando número do vetor: ")
const dobrados=listadenumeros.map(n => n * 2)
console.log(dobrados)

console.log("\nFiltrando números pares do vetor: ")
const pares = listadenumeros.filter(n => n % 2 == 0)
console.log(pares)

console.log("\nSomando todos os números do vetor: ")
const soma = listadenumeros.reduce((soma,atual) => soma + atual,0)
console.log(soma)

// console.log("\nFiltrando números impares do vetor: ")
// const impares = listadenumeros.filter(n => n % 2 == 1)
// console.log(impares)