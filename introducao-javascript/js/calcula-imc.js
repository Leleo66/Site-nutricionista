var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";




var pacientes = document.querySelectorAll(".paciente");



for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");

    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var validacaoPeso = validaPeso(peso)
    var validacaoAltura = validaAltura(altura)

    tdImc.textContent = imc

    if (!validacaoPeso) {
        tdImc.textContent = "Peso inválido!"
        var validacaoPeso = false
        paciente.classList.add("paciente-invalido")
    }

    if (!validacaoAltura) {
        tdImc.textContent = "Altura inválida!"
        var validacaoAltura = false
        paciente.classList.add("paciente-invalido")
    }


    if (validacaoAltura && validacaoPeso) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){
if(altura >= 0 && altura < 3){
    return true
}
else{
    return false
}
}

function calculaImc(peso,altura){
    var imc = 0
    imc = peso / (altura * altura);

    return imc.toFixed(2)

}