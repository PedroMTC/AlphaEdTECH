    document.getElementById("btnNumber").addEventListener("click", () => {
      const operando1 = parseFloat(document.getElementById("operando1").value);
      const operando2 = parseFloat(document.getElementById("operando2").value);
      const operador = document.getElementById("operador").value;
      let resultado;

      if (operador === "soma") {
        resultado = operando1 + operando2;
      } else if (operador === "subtracao") {
        resultado = operando1 - operando2;
      } else if (operador === "multiplicacao") {
        resultado = operando1 * operando2;
      } else if (operador === "divisao") {
        if (operando2 === 0) {
          resultado = "Erro: divisão por zero";
        } else {
          resultado = operando1 / operando2;
        }
      } else {
        resultado = "Operação inválida";
      }

      document.getElementById("resultado").textContent = "Resultado: " + resultado;
    });