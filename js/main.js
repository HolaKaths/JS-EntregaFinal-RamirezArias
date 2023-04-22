let myChart;

let url = 'https://holakaths.github.io/JS-EntregaFinal-RamirezArias/';

fetch('https://holakaths.github.io/JS-EntregaFinal-RamirezArias/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });



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

    // SweetAlert resultado edad
    Swal.fire({
        title: '¡Hola!',
        text: resultMessage,
        imageUrl: './assets/images/mascota.png',
        imageWidth: 55,
        imageHeight: 55,
        imageAlt: 'Logo Pets',
    }).then(() => {
        const resultado = document.getElementById("resultado");

        // Guardar en localStorage
        const mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
        mascotas.push({ animal, nombre, edadHumana, peso });
        localStorage.setItem("mascotas", JSON.stringify(mascotas));

        // SweetAlert guardado
        const mostrarMensaje = () => {
            const mensaje = `Tus datos han sido guardados en el historial pet`;
            Swal.fire({
                title: '¡Guardado!',
                text: mensaje,
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
            });
        };

        setTimeout(mostrarMensaje, 1000);
    });

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

        // Evaluar el resultado del IMC
        const mensaje =
            imc < 18.5 ? "Bajo peso" :
                imc >= 18.5 && imc < 25 ? "Peso normal" :
                    imc >= 25 && imc < 30 ? "Sobrepeso" :
                        imc >= 30 && imc < 35 ? "Obesidad grado 1" :
                            imc >= 35 && imc < 40 ? "Obesidad grado 2" :
                                "Obesidad grado 3";

    }

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

    //RANDOM PET
    //GLOBAL VARIABLES
    const randomButton = document.querySelector('.random');
    const dogList = document.getElementById('doggoDropDown');
    const listButton = document.querySelector('.list');
    const refreshButton = document.querySelector('.grid');
    //spinner


    //EVENT LISTENERS
    // window load
    window.addEventListener('load', populateList);
    window.addEventListener('load', getDogTerm);
    window.addEventListener('load', createImageGrid);
    //click and change
    randomButton.addEventListener('click', getRandomDoggo);
    dogList.addEventListener('change', getBreedImage);
    listButton.addEventListener('click', getBreedImage);
    refreshButton.addEventListener('click', createImageGrid);

    //FETCH CALLS
    //wikipedia dog term serach
    function getDogTerm() {
        fetch('https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=dog&formatversion=2')
            .then(checkStatus)
            .then(response => response.json())
            .then(data => displayDogInfo(data))
            .catch(error => notifyUser(error))
    }

    //random dog image
    function getRandomDoggo() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(checkStatus)
            .then(response => response.json())
            .then(data => handleData(data))
            .catch(error => notifyUser(error))
    }

    //populate List
    function populateList() {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(checkStatus)
            .then(response => response.json())
            .then(data => createListItems(data.message))
            .catch(error => notifyUser(error))
    }

    //getBreedImage
    function getBreedImage() {
        //get list value
        let selectedBreed = dogList.options[dogList.selectedIndex].value;
        //build url
        let url = `https://dog.ceo/api/breed/${selectedBreed}/images`;
        //fetch call
        fetch(url)
            .then(checkStatus)
            .then(response => response.json())
            .then(data => getImageURL(data.message))
            .catch(error => console.log(error))
    }

    function createImageGrid() {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(checkStatus)
            .then(response => response.json())
            .then(data => createGrid(data.message))
            .catch(error => notifyUser(error))
    }

    //HELPER FUNCTIONS
    //checkStatus
    function checkStatus(response) {
        if (response.ok) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    //display Dog Info
    function displayDogInfo(data) {
        //populate paragraph
        document.getElementById('dogInfo').innerHTML = `<strong>${capitalize(data[0])}:</strong> ${data[2][0]} <a href="${data[3][0]}" alt="read more on wikipedia"> Read more on wikipedia</a>`;
    }


    //handleData
    function handleData(data) {
        let url = data.message;
        console.log(url)
        let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+\-?\w+)\/.+/g;
        let breedName = regex.exec(url);
        document.getElementById('randomImageContainer').innerHTML = `<img alt="random image of a ${fixBreed(breedName[1])}" src='${url}'/>`;
        document.querySelector('.dogInfo').innerHTML = `<p class="h5">Random image of a ${fixBreed(breedName[1])}</p>`;
    }

    //getImageURL
    function getImageURL(data) {
        //get random number
        let randomNumberURL = data[Math.floor(Math.random() * data.length) + 1];
        listImageContainer.innerHTML = `<img src="${randomNumberURL}" alt="${extractBreedName(data)}"/>`;
    }

    //createListItems
    function createListItems(data) {
        let output = '';
        Object.keys(data).forEach(key => output += `<option value="${key}">${fixBreed(key)}</option>`);
        document.getElementById('doggoDropDown').innerHTML = output;
    }

    //notifyUser
    function notifyUser(error) {
        const errorContainer = document.querySelector('.alert');
        errorContainer.innerHTML = `There was an error with the server request (${error}). <br> Click the button again.`;
        errorContainer.style.display = 'block';
        setTimeout(() => {
            errorContainer.innerHTML = '';
            errorContainer.style.display = 'none';
        }, 4000)
    }

    //fixBreed
    function fixBreed(breedName) {
        if (breedName === 'germanshepherd') {
            return 'German Shepherd';
        } else if (breedName === 'mexicanhairless') {
            return 'Mexican Hairless';
        } else if (breedName === 'stbernard') {
            return 'St. Bernard';
        } else if (breedName === "african") {
            return 'African Wild Dog';
        } else if (breedName === 'bullterrier') {
            return 'Bull Terier';
        }
        return capitalize(breedName);
    }

    //capitalize breed name
    function capitalize(breedName) {
        return breedName.replace(/\-/g, ' ')
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    //extract breed name
    function extractBreedName(data) {
        let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+-?\w+)\/\w+\.\w+/g;
        let match = regex.exec(data);
        return fixBreed(match[1]);
    }

    //createGrid
    function createGrid(data) {
        let output = '';
        const container = document.querySelector('.card-deck');
        data.map(item => {
            output +=
                `
    <div class="card mb-4 box-shadow">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">${extractBreedName(item)}</h4>
      </div>
      <div class="card-body">
        <img src="${item}" class="img-fluid" alt="${extractBreedName(item)}"/>
      </div>
    </div>    
    `
        })
        container.innerHTML = output;
    }

}
