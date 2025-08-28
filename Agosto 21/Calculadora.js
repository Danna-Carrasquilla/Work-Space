function Suma(){
    const elemento1 = document.getElementById("Suma1");
    const elemento2 = document.getElementById("Suma2");
    const resultado = document.getElementById("ResultadoSuma");
    resultado.innerHTML = parseInt(elemento1.value) + parseInt(elemento2.value);
}