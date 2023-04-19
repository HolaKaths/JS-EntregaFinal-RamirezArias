let myChart;

function calcularIMCGato() {
    // Obtener los valores de peso y altura
    const peso = document.getElementById('pesoGato').value;
    const altura = document.getElementById('alturaGato').value;

    // Calcular el IMC
    // Fórmula: IMC = peso (kg) / (altura (m) * altura (m)) * 10000
    const imc = (peso / ((altura / 100) ** 2)) * 10000;

    // Evaluar el resultado del IMC
    const mensaje = imc < 18.5 ? "Bajo peso para gatos"
        : imc >= 18.5 && imc < 24.9 ? "Peso normal para gatos"
            : imc >= 25 && imc < 29.9 ? "Sobrepeso para gatos"
                : imc >= 30 && imc < 34.9 ? "Obesidad grado 1 para gatos"
                    : imc >= 35 && imc < 39.9 ? "Obesidad grado 2 para gatos"
                        : "Obesidad grado 3 para gatos";

 }
