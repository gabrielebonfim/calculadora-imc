var inputPeso = document.querySelector("#peso");
var inputAltura = document.querySelector("#altura");


function calcula(){
    var peso = parseFloat(inputPeso.value.replace(",","."));
    var altura = parseFloat(inputAltura.value.replace(",","."));

    var calculo = peso / (Math.pow(altura, 2));
    var resultado = calculo;
    alert(parseFloat(resultado.toFixed(1)));
}
var button = document.querySelector("#calcular");
button.onclick = calcula;

//ativando enter para ṔC
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        button.click();
    }
});


// Configurações da segunda tela
/*
function mudarEstado(){
    var 
}
*/


