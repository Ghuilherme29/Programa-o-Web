const CalcularMedia = document.getElementById("CalcularMedia")

function realizarCalculos() {
    let Nt1 = parseFloat(document.getElementById("Nt1").value);
    let Nt2 = parseFloat(document.getElementById("Nt2").value);
    let Nt3 = parseFloat(document.getElementById("Nt3").value);
    let resultadoDiv = document.getElementById("resultado");


    if (isNaN(Nt1) || isNaN(Nt2) || isNaN(Nt3)) {
    resultadoDiv.innerHTML = "<p> Por favor, Digite as três notas.</p>";
    resultadoDiv.style.display = "block";
    return;
    }

    let media = (Nt1 + Nt2 + Nt3) / 3;

    let situacao = '';
    if (media <=7 ) {
    situacao = "<strong style = 'color: red';> Aprovado </strong>";
    } else if (media >= 5 || media <= 6.9 ) {
        situacao = "<strong style = 'color: yellow';> Em recuperação </strong>";
    } else {
        situacao = "<strong style = 'color: red';> Reprovado </strong>";
    }
    

    

    resultadoDiv.innerHTML = `<p> Média: ${media} </p>
    <p> Situação: ${situacao} `


    resultadoDiv.style.display = "block";
}
CalcularMedia.addEventListener("click", realizarCalculos)