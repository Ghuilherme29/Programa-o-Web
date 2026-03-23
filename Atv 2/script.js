 
const btnCalcular = document.getElementById("btnCalcular");


function realizarCalculos() {
    
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultadoDiv = document.getElementById("resultado");

    
    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.innerHTML = "<p>Por favor, digite os dois números.</p>";
        resultadoDiv.style.display = "block";
        return; 
    }

    
    let soma = num1 + num2;
    let media = soma / 2;
    let produto = num1 * num2;
    
    
    let maior = Math.max(num1, num2);
    let menor = Math.min(num1, num2);

    
    let textoMaiorMenor = "";
    if (num1 === num2) {
        textoMaiorMenor = `<p><strong>Aviso:</strong> Os números são iguais.</p>`;
    } else {
        textoMaiorMenor = `
            <p><strong>Maior Número:</strong> ${maior}</p>
            <p><strong>Menor Número:</strong> ${menor}</p>
        `;
    }

    
    resultadoDiv.innerHTML = `
        <p><strong>Soma:</strong> ${soma}</p>
        <p><strong>Média:</strong> ${media}</p>
        <p><strong>Produto:</strong> ${produto}</p>
        ${textoMaiorMenor}
    `;

    
    resultadoDiv.style.display = "block";
}


btnCalcular.addEventListener("click", realizarCalculos);