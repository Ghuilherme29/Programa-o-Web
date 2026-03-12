const listaDeAlunos = [
    {Nome:"Ana", nota: 6.0},
    {Nome:"Bruno", nota: 8.0},
    {Nome:"Carla", nota: 9.0},
    {Nome:"Andreia", nota: 7.0},
    {Nome:"Marta", nota: 6.0}
]

console.log("Encontre a aluna marta e mostre o nome e a média dela.")
const UsuarioEncontrado = listaDeAlunos.find(((u) => u.Nome == 'Marta'));
console.log(
    `Nome: ${UsuarioEncontrado.Nome}\nnota: ${UsuarioEncontrado.nota}`
);

console.log("\nMostrando a média geral da turma:")
const somaNota = listaDeAlunos.reduce(
    (total,Nome ) => total + Nome.nota /2,0,
);
console.log(somaNota)

console.log("\nMostrando o nome e a nota dos alunos com a nota abaixo ou igual a 7.0")
const UsuarioEncontradoPornota = listaDeAlunos.forEach((u) => u.nota <= 7)
console.log(
    `Nome: ${UsuarioEncontrado.Nome}\nnota: ${UsuarioEncontrado.nota}`
)