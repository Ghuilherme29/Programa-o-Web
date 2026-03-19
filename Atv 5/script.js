const btnCalcular = document.getElementById("btnCalcular")

function realizarCalculos() {
    let quantidade = parseInt(document.getElementById("Compra").value);
    let resultadoDiv = document.getElementById("resultado")
    

    if (isNaN(quantidade) || quantidade <=0) {
        resultadoDiv.innerHTML = "<p> Digite a quantidade de maçãs desejadas </p>.";
        resultadoDiv.style.display = "block";
        return;
    }
    
    let precoUnitario ;
    if (quantidade < 12) {
        precoUnitario = 1.30;
    } else {
        precoUnitario = 1.00;
    }

    let valorTotal = quantidade * precoUnitario;

    resultadoDiv.innerHTML = `<p> valor: ${precoUnitario.toFixed(2)}</p>
    <p><strong> Total da compra: R$ ${valorTotal.toFixed(2)}</p>`;

    resultadoDiv.style.display = "block";

}

btnCalcular.addEventListener("click", realizarCalculos) 
