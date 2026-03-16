// Alterado para gerarTabuada (com T maiúsculo) para bater com o evento lá embaixo
function gerarTabuada() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseInt(numeroInput.value);

    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    // Verificar se a entrada é um número válido
    // Nota: isNaN(numero) já é suficiente aqui, pois se o campo estiver vazio, 
    // parseInt retorna NaN automaticamente.
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = `<p>Por favor, digite um número válido.</p>`;
        return; 
    }

    // CORREÇÃO: Usando += para adicionar ao HTML
    resultadoDiv.innerHTML += `<h2>Tabuada do ${numero}</h2>`;

    // Laço de repetição para gerar tabuada.
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        // CORREÇÃO: Usar resultadoDiv.innerHTML, += e adicionar as crases (`)
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}

// Nota: Verifique se no seu HTML o ID é "bntGerar" mesmo ou "btnGerar" (de button).
const botaoGerar = document.getElementById("bntGerar");
botaoGerar.addEventListener("click", gerarTabuada);