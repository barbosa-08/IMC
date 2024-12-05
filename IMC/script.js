function calculoIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  const imc = peso / (altura * altura);
  document.getElementById('IMCresultado').textContent = imc.toFixed(2);

  let classification = '';
  if (imc < 18.5) {
    classification = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 24.9) {
    classification = 'Peso normal';
  } else if (imc >= 25 && imc < 29.9) {
    classification = 'Sobrepeso';
  } else if (imc >= 30 && imc < 34.9) {
    classification = 'Obesidade grau 1';
  } else if (imc >= 35 && imc < 39.9) {
    classification = 'Obesidade grau 2';
  } else {
    classification = 'Obesidade grau 3';
  }
  
  document.getElementById('classification').textContent = classification;

  const resultBox = document.getElementById('boxresultado');
  resultBox.classList.add('expanded');
}
