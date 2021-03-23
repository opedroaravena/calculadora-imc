const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const resultado = document.getElementById("resultado").value;
  const valorIMC = (peso / (altura * altura)).toFixed(1);
  resultado.innerHTML = `${nome} seu imc é de ${valorIMC}`;
}

calcular.addEventListener("click", imc);
