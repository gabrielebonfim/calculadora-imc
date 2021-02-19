var inputPeso = document.querySelector("#peso");
var inputAltura = document.querySelector("#altura");

function calcula(){
    var peso = parseFloat(inputPeso.value.replace(",","."));
    var altura = parseFloat(inputAltura.value.replace(",","."));

    var calculo = peso / (Math.pow(altura, 2));
    var resultado = parseFloat(calculo.toFixed(1));
    
    document.getElementById("imc").innerHTML=resultado;
}

function exibirResultado() {
    document.getElementById("results").style.display = "flex";
    document.getElementById("square-content").style.display = "none";
}

function ocultarResultado() {
    document.getElementById("results").style.display = "none";
    document.getElementById("square-content").style.display = "flex";
}

function calculaExibe(){
    calcula()
    exibirResultado()
}

var buttonIn = document.querySelector("#calcular");
buttonIn.onclick = calculaExibe;

var buttonOut = document.querySelector("#restart");
buttonOut.onclick = ocultarResultado;

//ativando enter para ṔC
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        buttonIn.click();
    }
});






