document.getElementById("btn").addEventListener("click", () => {
  const valor = document.getElementById("valor").value.replace(",", ".");
  const valorParseFloat = parseFloat(valor);

  // Validação: valorParseFloat tem que ser número e ser igual ao texto convertido
  if (isNaN(valorParseFloat) || valorParseFloat.toString() !== valor) {
    document.getElementById("resultado1").textContent = "Erro: insira um número válido.";
    document.getElementById("resultado2").textContent = "";
    return;
  }

  let resultado1 = Math.ceil(valorParseFloat);
  let resultado2 = Math.floor(valorParseFloat);

  if (resultado1 === resultado2) {
    document.getElementById("resultado1").textContent = `O valor é inteiro: ${valorParseFloat}`;
    document.getElementById("resultado2").textContent = "";
    return;
  }

  document.getElementById("resultado1").textContent = "Maior inteiro menor que o valor inserido pelo usuário: " + resultado2;
  document.getElementById("resultado2").textContent = "Menor inteiro maior que o valor inserido pelo usuário: " + resultado1;
});
