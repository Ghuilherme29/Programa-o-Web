const checarIdd = document.getElementById("checarIdd")

function RealizarVerificacao() {
    let idade = parseInt(document.getElementById("idade").value);
    let resultadoDiv = document.getElementById("resultado");
    


    if (isNaN(idade)) {
     resultadoDiv.innerHTML = "<p> Digite a sua idade </p>.";
     resultadoDiv.style.display = "block";
     return;
    }


    let checar = '';
    if (idade < 16) {
     checar = "<strong style = 'color: red';> Não pode votar </strong> ";  
    } else if (idade < 18 || idade >= 65) {
       checar = "<strong style = 'color: blue';> Voto opcional </strong> ";
    } else {
        checar = "<strong style = 'color: green';> Voto obrigatório </strong>"
    }
    

    resultadoDiv.innerHTML = `<p>checar: ${checar}</p>`

    resultadoDiv.style.display = "block";
}   

checarIdd.addEventListener("click", RealizarVerificacao)