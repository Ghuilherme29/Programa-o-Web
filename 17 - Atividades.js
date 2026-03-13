const listaDeAlunos = [
    {nome:"Ana", nota: 6.0},
    {nome:"Bruno", nota: 8.0},
    {nome:"Carla", nota: 9.0},
    {nome:"Andreia", nota: 7.0},
    {nome:"Marta", nota: 6.0}
]

console.log("Encontre a aluna marta e mostre o nome e a média dela.")
const UsuarioEncontrado = listaDeAlunos.find(((u) => u.nome == 'Marta'));
console.log(
    `Nome: ${UsuarioEncontrado.nome}\nnota: ${UsuarioEncontrado.nota}`
);

console.log("\nMostrando a média geral da turma:")
const somaNota = listaDeAlunos.reduce(
    (total,nome ) => total + nome.nota /2,0,
);
console.log(somaNota)

console.log("\nMostrando o nome e a nota dos alunos com a nota abaixo ou igual a 7.0")
const Mnn = listaDeAlunos.filter((nome)=> nome.nota <= 7)
Mnn.forEach((nome) =>
    console.log(`${nome.nome} está com ${nome.nota} pontos`)
)

console.log("\nMostrando o nome e a nota dos alunos com a nota maior ou igual a 7.0")
const Mnnm = listaDeAlunos.filter((nome)=> nome.nota >= 7)
Mnnm.forEach((nome) =>
    console.log(`${nome.nome} está com ${nome.nota} pontos`)
)

