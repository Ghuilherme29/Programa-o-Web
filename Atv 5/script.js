const btnCalcularmç = document.getElementById("btnCalcularmç")

function realizarCalculos() {
    let maca = parseFloat(document.getElementById("Compra").value);
    let resultadoDiv = document.getElementById("resultado")
    

    if (isNaN(maca)) {
        resultadoDiv.innerHTML = "<p> Digite a sua idade </p>.";
        resultadoDiv.style.display = "block";
        return;
    }
    
    let checar,soma = 1.30
    if (maca <12) {
        let soma 
    }
}