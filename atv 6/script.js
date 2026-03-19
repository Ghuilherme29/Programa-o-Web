const btn = document.getElementById("btnVerificar")
function verificarAposentadoria() {
    let anoAtual = new Date().getFullYear();

    let matricula = document.getElementById("Mt").value;
    let anoNascimento = parseInt(document.getElementById("anoNascimento").value);
    let TempoTrabalho = parseInt(document.getElementById("TempoTrabalho").value);
    let resultadoDiv = document.getElementById("resultado")

    if (isNaN(anoNascimento) || anoNascimento > anoAtual || anoNascimento< 1900 || isNaN(TempoTrabalho)) {
        resultadoDiv.innerHTML = "<p>Preencha todos os campos corretamente</p>";
        resultadoDiv.style.display = "block";
        return;
    }

   
    let idade = anoAtual - anoNascimento;

    let mensagem = '';
    if (idade >= 65 || TempoTrabalho >=30) {
        mensagem = "Requer aposentadoria";
    } else {
        mensagem = "Não requerer aposentadoria";
    }

    resultadoDiv.innerHTML = `
    <p>Empregado: ${matricula}</p>
    <p>Idade: ${idade} anos</p>
    <p>Tempo de trabalho: ${TempoTrabalho} anos</p>
    <p><strong>Resultado: ${mensagem}</p></strong>: `

    resultadoDiv.style.display = "block";
}

btn.addEventListener("click", verificarAposentadoria);