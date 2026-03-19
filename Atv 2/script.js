// Captura o botão pelo ID
const btnCalcular = document.getElementById("btnCalcular");

// Função que faz os cálculos
function realizarCalculos() {
    // Captura os valores digitados
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultadoDiv = document.getElementById("resultado");

    // Validação: verifica se o usuário deixou em branco
    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.innerHTML = "<p>Por favor, digite os dois números.</p>";
        resultadoDiv.style.display = "block";
        return; 
    }

    // Fazendo a matemática
    let soma = num1 + num2;
    let media = soma / 2;
    let produto = num1 * num2;
    
    // Descobrindo maior e menor de forma inteligente
    let maior = Math.max(num1, num2);
    let menor = Math.min(num1, num2);

    // Tratando o caso de os números serem iguais
    let textoMaiorMenor = "";
    if (num1 === num2) {
        textoMaiorMenor = `<p><strong>Aviso:</strong> Os números são iguais.</p>`;
    } else {
        textoMaiorMenor = `
            <p><strong>Maior Número:</strong> ${maior}</p>
            <p><strong>Menor Número:</strong> ${menor}</p>
        `;
    }

    // Jogando os resultados na tela
    resultadoDiv.innerHTML = `
        <p><strong>Soma:</strong> ${soma}</p>
        <p><strong>Média:</strong> ${media}</p>
        <p><strong>Produto:</strong> ${produto}</p>
        ${textoMaiorMenor}
    `;

    // Mostra a div de resultado
    resultadoDiv.style.display = "block";
}

// Escuta o clique do botão
btnCalcular.addEventListener("click", realizarCalculos);