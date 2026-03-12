// Vetor de objetos.

// Exemplo com vetor de nome
const listaDeNomes = [ "Ana", "Maria", "Joana", ]

// Exemplo com vetor de números
const listaDeNumeros = [1,2,3,4,5]

const listaDeUsuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade: 35},
    {nome: "Joana", idade: 65},
    {nome: "José", idade: 15},
    {nome: "Marcos", idade: 17}

]

// Percorre exibindo os elementos do vetor.
// ForEach é uma função com laços de repetição.
console.log("Exibindo todos os usuários do vetor")
// Use as {} caso precise de mais uma nova linha.
// Neste caso não precisa, mas vamos usar
listaDeUsuarios.forEach( usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos`)
    console.log('-----------------------')
})

// Como os antigos
console.log('\nExibindo todos os usuários')
for (let i = 0; i < listaDeUsuarios.length; i ++) {
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos`)
}

console.log('\nFiltrando maiores de 18 anos.')
const MaiorIdade = listaDeUsuarios.filter (usuario => usuario.idade >=18)
// Use as {} caso precise de mais de uma linha
// Neste caso não precisa, por isso não vamos usar.
MaiorIdade.forEach (usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos`)
)

// Ex1. Filtrando menores de idade.'
console.log("\nFiltrando menores de 18 anos.")
const MenorIdade = listaDeUsuarios.filter ( usuario => usuario.idade <= 18)
MenorIdade.forEach (usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade} anos`)
)

// Ex2. Filtrando Números pares.
console.log("\n Filtrando apenas numeros pares.")
const pares = listaDeNumeros.filter (n => n % 2 == 0 )
console.log (pares)

//Ex3. Filtrando os nomes com ForEach.
console.log("\nFiltrando os nomes com ForEach.")
listaDeUsuarios.forEach( usuario => {
    console.log(`${usuario.nome}`)
})