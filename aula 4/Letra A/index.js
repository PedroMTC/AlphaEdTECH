document.getElementById("btnNumber").addEventListener("click", () => {
  const peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
  const altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
  let imc;
  let massaCorporal;

  imc = peso / (altura * altura);

  if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
    document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";
    return;
  }

  if (imc < 18.5) {
    massaCorporal = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    massaCorporal = "Peso Ideal";
  }
  else if (imc >= 25 && imc < 29.9) {
    massaCorporal = "Sobre Peso";
  } else if (imc >= 30) {
    massaCorporal = "Obesidade";
  }

  console.log(imc);


  document.getElementById("resultado").textContent = "Resultado: " + imc.toFixed(2) + massaCorporal;
  document.getElementById("resultadoCalc").textContent = "Resultado: " + massaCorporal;
});