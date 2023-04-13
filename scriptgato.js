function calcularIMCGato() {
    // Obtener los valores de peso y altura
    const peso = document.getElementById('pesoGato').value;
    const altura = document.getElementById('alturaGato').value;

    // Calcular el IMC para gatos
    // El IMC para gatos es diferente al de humanos
    // Fórmula: IMC = peso (kg) / (altura (m) * altura (m)) * 10000
    const imc = (peso / ((altura / 100) ** 2)) * 10000;

    // Mostrar el resultado en la página
    const resultado = document.getElementById('resultadoGato');
    resultado.textContent = imc.toFixed(2);

    // Evaluar el resultado del IMC para gatos
    resultado.textContent += imc < 18.5 ? " - Bajo peso para gatos"
        : imc >= 18.5 && imc < 24.9 ? " - Peso normal para gatos"
            : imc >= 25 && imc < 29.9 ? " - Sobrepeso para gatos"
                : imc >= 30 && imc < 34.9 ? " - Obesidad grado 1 para gatos"
                    : imc >= 35 && imc < 39.9 ? " - Obesidad grado 2 para gatos"
                        : " - Obesidad grado 3 para gatos";
}
