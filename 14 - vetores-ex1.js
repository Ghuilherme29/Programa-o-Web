// Exercícios

// cire um vetor com nome de seus familiares.
// com seis nomes.

// Use todos os comandos vistor em vetores após criar a lista.

const listadenomesFm = ["Analice", "Cristiane", "Ana lucia", "Osmario", "Gleice", "Laion"]

console.log("Exibindo todos os familiares: ")
console.log (listadenomesFm)

console.log("\nExibindo o primeiro familiar:")
console.log(listadenomesFm[0])

console.log("\nAdicionando um membro: ")
listadenomesFm.push('Clara')
console.log(listadenomesFm)

console.log("\nAdicionando mais um membro: ")
listadenomesFm.push('Judson')
console.log(listadenomesFm)

console.log("\nRemovendo um membro: ")
listadenomesFm.splice(3,1)
console.log(listadenomesFm)

console.log("\nRemovendo outro membro: ")
listadenomesFm.splice(2,1)
console.log(listadenomesFm)

console.log("\n Removendo apenas o primeiro membro: ")
listadenomesFm.shift()
console.log(listadenomesFm)

console.log("\n Removendo apenas o último membro: ")
listadenomesFm.pop()
console.log(listadenomesFm)





