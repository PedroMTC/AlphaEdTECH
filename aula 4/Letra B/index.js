document.getElementById("btn").addEventListener("click", () => {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);
  let nSort;

  if (isNaN(min) || isNaN(max) || max <= 0) {
    document.getElementById("resultado").textContent = "os valores inseridos não são numéricos.";
    return;
  }

  if (max < min) {
    document.getElementById("resultado").textContent = "o valor máximo é menor que o valor mínimo";
    return;
  }

  if (min === max) {
    nSort = min;
  }
  else{
    nSort = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(nSort);
  document.getElementById("resultado").textContent = "Resultado: " + nSort;
});