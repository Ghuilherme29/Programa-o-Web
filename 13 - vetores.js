// Vetores.

const listadenomes = ["Marta", "josé", "Maria"]

console.log("Exibindo todos os elementos:")
console.log(listadenomes)

console.log("\nExibindo o primeiro elementos: ")
console.log(listadenomes[0])

console.log("\nAdicionando um elemento: ")
listadenomes.push("Marília")
console.log(listadenomes)

console.log("\nAdicionando um elemento: ")
listadenomes.push("Luskas")
console.log(listadenomes)

console.log("\nRemovendo um elemento: ")
// Removendo no índice 2/apenas 1 elemento
listadenomes.splice(2,1)
console.log(listadenomes)

console.log("\nRemovendo um elemento: ")
listadenomes.splice(1,1)
console.log(listadenomes)

console.log("\nRemovendo apenas o último elemento: ")
listadenomes.pop()
console.log(listadenomes)

console.log("\nRemovendo apenas o primeiro elemento: ")
listadenomes.shift()
console.log(listadenomes)