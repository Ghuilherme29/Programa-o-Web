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
    if (media >=7 ) {
    situacao = "<strong style = 'color: green';> Aprovado </strong>";
    } if (Nt1 < 1 || Nt1 >10){
        resultadoDiv.innerHTML = "<p style='color: #d32f2f;'> A 1ª nota é inválida ! Diga uma nota válida.</p>"
        resultadoDiv.style.display = "block";
        campoNt1.value = "";
        campoNt1.focus();
        return;
    } if (Nt2 < 1 || Nt2 >10){
        resultadoDiv.innerHTML = "<p style='color: #d32f2f;'> A 2ª nota é inválida ! Diga uma nota válida.</p>"
        resultadoDiv.style.display = "block";
        campoNt1.value = "";
        campoNt1.focus();
        return;
    } if (Nt3 < 1 || Nt3 >10){
        resultadoDiv.innerHTML = "<p style='color: #d32f2f;'> A 3ª nota é inválida ! Diga uma nota válida.</p>"
        resultadoDiv.style.display = "block";
        campoNt1.value = "";
        campoNt1.focus();
        return;
    }
    else if (media >= 5.1 || media == 6.9 ) {
        situacao = "<strong style = 'color: yellow';> Em recuperação </strong>";
    } else {
        situacao = "<strong style = 'color: red';> Reprovado </strong>";
    }
    

    

    resultadoDiv.innerHTML = `<p> Média: ${media} </p>
    <p> Situação: ${situacao} `


    resultadoDiv.style.display = "block";
}
CalcularMedia.addEventListener("click", realizarCalculos)
