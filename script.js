let myChart;

function calcularEdad() {
    const animal = document.getElementById("animal").value;
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const tamano = document.getElementById("tamano").value;

    let edadHumana = 0;
    let peso = 0;
    if (animal === "perro") {
        if (edad === 1) {
            edadHumana = 15;
        } else if (edad === 2) {
            edadHumana = 24;
        } else {
            edadHumana = 24 + (edad - 2) * 4;
        }
    
        if (tamano === "pequeno") {
            if (edad <= 12) {
                peso = edad * 2;
            } else {
                peso = 24 + (edad - 12) * 1;
            }
        } else if (tamano === "mediano") {
            if (edad <= 12) {
                peso = edad * 2.5;
            } else {
                peso = 30 + (edad - 12) * 1.5;
            }
        } else {
            if (edad <= 12) {
                peso = edad * 4;
            } else {
                peso = 54 + (edad - 12) * 2;
            }
        }
    } else if (animal === "gato") {
        if (edad === 1) {
            edadHumana = 15;
        } else if (edad === 2) {
            edadHumana = 24;
        } else {
            edadHumana = 24 + (edad - 2) * 4;
        }
    
        if (tamano === "pequeno") {
            peso = 2.5 * edad + 1.5;
        } else if (tamano === "mediano") {
            peso = 3.5 * edad + 1.5;
        } else {
            peso = 5.5 * edad + 1.5;
        }
    } else {
        // Si el animal no es un perro ni un gato, asignar null a las variables de edadHumana y peso
        edadHumana = null;
        peso = null;
    }
    
    const resultMessage = `La edad de tu ${animal} ${nombre} en años humanos es ${edadHumana} años`;

    Swal.fire({
        title: '¡Hola!',
        text:   resultMessage, 
        imageUrl: './assets/images/mascota.png',
        imageWidth: 55,
        imageHeight: 55,
        imageAlt: 'Logo Pets',
    });


    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `La edad de tu ${animal} ${nombre} en años humanos es ${edadHumana} y su peso ideal estimado a esa edad sería ${peso} kg.`;

    // Guardar en localStorage
    const mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
    mascotas.push({ animal, nombre, edadHumana, peso });
    localStorage.setItem("mascotas", JSON.stringify(mascotas));

    // Crear una función para mostrar el mensaje con SweetAlert
    const mostrarMensaje = () => {
        const mensaje = `Tus datos han sido guardados en el historial pet`;
        Swal.fire({
            title: '¡Guardado!',
            text: mensaje,
            icon: 'success',
            showConfirmButton: false,
            timer: 3000
        });
    };

    // Agregar setTimeout para llamar a la función de mostrar mensaje después de 2 segundos
    setTimeout(mostrarMensaje, 2000);
}

function mostrarResultados() {
    // Llamar los datos de localStorage
    const mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

    // Mostrar resultados en tabla
    const tabla = document.getElementById("tablaResultados");
    tabla.innerHTML = `
        <thead>
            <tr>
                <th>Animal</th>
                <th>Nombre</th>
                <th>Edad humana</th>
                <th>Peso estimado</th>
            </tr>
        </thead>
        <tbody>
    `;
    mascotas.forEach(mascota => {
        tabla.innerHTML += `
            <tr>
                <td>${mascota.animal}</td>
                <td>${mascota.nombre}</td>
                <td>${mascota.edadHumana}</td>
                <td>${mascota.peso}</td>
            </tr>
        `;
    });
    tabla.innerHTML += "</tbody>";

}

function borrarResultados() {
    // Borrar datos de localStorage
    localStorage.removeItem("mascotas");

    // Limpiar/borrar tabla
    const tabla = document.getElementById("tablaResultados");
    tabla.innerHTML = "";
}

function calcularIMC() {
    // Obtener los valores de peso y altura
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    // Calcular el IMC
    const imc = (peso / ((altura / 100) ** 2)).toFixed(2);

    // Mostrar el resultado en la página
    const resultado = document.getElementById('resultado2');
    resultado.textContent = imc;

    // Evaluar el resultado del IMC
    resultado.textContent += imc < 18.5 ? " - Bajo peso"
        : imc >= 18.5 && imc < 25 ? " - Peso normal"
            : imc >= 25 && imc < 30 ? " - Sobrepeso"
                : imc >= 30 && imc < 35 ? " - Obesidad grado 1"
                    : imc >= 35 && imc < 40 ? " - Obesidad grado 2"
                        : " - Obesidad grado 3";
}


function addNewRow() {
    let table = document.getElementById("imcData");
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    let nuevaEdad = document.createElement("input");
    nuevaEdad.setAttribute("type", "number");
    nuevaEdad.setAttribute("class", "edad");
    nuevaEdad.setAttribute("name", "edad");
    nuevaEdad.setAttribute("min", "1");
    nuevaEdad.setAttribute("max", "200");
    nuevaEdad.setAttribute("step", "0.1");
    nuevaEdad.setAttribute("form", "formularioIMC");
    nuevaEdad.setAttribute("required", "");

    let nuevoPeso = document.createElement("input");
    nuevoPeso.setAttribute("type", "number");
    nuevoPeso.setAttribute("class", "peso");
    nuevoPeso.setAttribute("name", "peso");
    nuevoPeso.setAttribute("min", "1");
    nuevoPeso.setAttribute("max", "200");
    nuevoPeso.setAttribute("step", "0.1");
    nuevoPeso.setAttribute("form", "formularioIMC");
    nuevoPeso.setAttribute("required", "");

    let nuevaAltura = document.createElement("input");
    nuevaAltura.setAttribute("type", "number");
    nuevaAltura.setAttribute("class", "altura");
    nuevaAltura.setAttribute("name", "altura");
    nuevaAltura.setAttribute("min", "1");
    nuevaAltura.setAttribute("max", "200");
    nuevaAltura.setAttribute("form", "formularioIMC");
    nuevaAltura.setAttribute("required", "");

    cell1.appendChild(nuevaEdad);
    cell2.appendChild(nuevoPeso);
    cell3.appendChild(nuevaAltura);
    cell4.innerHTML = "%";
}

// Llamar los datos de la tabla
function leerTabla() {
    const valoresTabla = document.querySelectorAll("#imcData tr");
    let listaObjetosIMC = [];


    for (let index = 1; index < valoresTabla.length; index++) {
        let edad = valoresTabla[index].querySelector("input[name='edad']").value;
        let peso = valoresTabla[index].querySelector("input[name='peso']").value;
        let altura = valoresTabla[index].querySelector("input[name='altura']").value;
        let imc = 0;
        listaObjetosIMC[index - 1] = { edad, peso, altura, imc };
    }
    listaObjetosIMC = calcularIMCTabla(listaObjetosIMC);

    for (let index = 1; index < valoresTabla.length; index++) {
        valoresTabla[index].lastElementChild.innerHTML = listaObjetosIMC[index - 1].imc;
    }

    // Lista de objetos en cadena JSON
    const listaObjetosIMCJson = JSON.stringify(listaObjetosIMC);

    // Guardar la cadena JSON en el localStorage
    localStorage.setItem('listaObjetosIMC', listaObjetosIMCJson);

    // Obtener la lista de objetos IMC del localStorage
    const listaObjetosIMCJsonFromLocalStorage = localStorage.getItem('listaObjetosIMC');
    const listaObjetosIMCFromLocalStorage = JSON.parse(listaObjetosIMCJsonFromLocalStorage) || [];

    // Obtener la lista de edades del localStorage
    const baseDeDatosJson = localStorage.getItem('BD');
    const baseDeDatos = JSON.parse(baseDeDatosJson) || [];
    // Agregar edades e IMCs a la base de datos
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        let edad = parseInt(document.querySelector("input[name='edad']").value);
        let imc = parseFloat(document.querySelector("input[name='imc']").value);
        listaObjetosIMCFromLocalStorage.push({ edad, imc });
        baseDeDatos.push({ edad, imc });

        // Guardar la lista de objetos IMC y la base de datos en el localStorage
        localStorage.setItem('listaObjetosIMC', JSON.stringify(listaObjetosIMCFromLocalStorage));
        localStorage.setItem('BD', JSON.stringify(baseDeDatos));
    });

    if (myChart) {
        myChart.destroy();
    }
    crearGrafico(listaObjetosIMC);
}

function calcularIMCTabla(listaObjetosIMC) {
    const decimales_IMC = 2;
    for (let index = 0; index < listaObjetosIMC.length; index++) {
        let aux = listaObjetosIMC[index];
        aux.imc = (aux.peso / ((aux.altura / 100) ** 2)).toFixed(decimales_IMC);
        listaObjetosIMC[index] = aux;
    }
    return listaObjetosIMC;
}

function crearGrafico(listaObjetosIMC) {

    const edades = listaObjetosIMC.map((obj) => obj.edad);
    const imcs = listaObjetosIMC.map((obj) => obj.imc);

    const ctx = document.getElementById("imcChart").getContext("2d");

    //Crear gráfico lineal con Edad + IMC
    myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: edades,
            datasets: [
                {
                    label: "IMC",
                    data: imcs,
                    backgroundColor: "rgba(153, 205, 1, 0.6)",
                    borderColor: "rgba(153, 205, 1, 1)",
                    borderWidth: 2,
                    fill: true,
                    lineTension: 0.2,
                },
            ],
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Edad",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "IMC",
                    },
                },
            },
        },
    });
}
