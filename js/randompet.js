//Random pet

const imageContainer = document.getElementById('image-container');

function getRandomDoggo() {
    fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
            'Authorization': 'Bearer live_Ev2yojB7VRgNtCZETq8pvDYq0jynQIGdBFnHAb1pCIctVUwOBJc1PHeFt1HIiRKL',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => handleData(data))
        .catch(error => notifyUser(error))
}

function handleData(data) {
    if (data && data.length > 0 && data[0].breeds && data[0].breeds.length > 0) {
        let breedName = data[0].breeds[0].name;
        let url = data[0].url;
        imageContainer.innerHTML = `<img alt="random image of a ${breedName}" src='${url}'/>`;
        document.querySelector('.dogInfo').innerHTML = `<p class="h5">Random image of a ${breedName}</p>`;
    } else {
        notifyUser('No se encontró ninguna imagen de perro.');
    }
}

function notifyUser(error) {
    const errorContainer = document.querySelector('.alert');
    errorContainer.innerHTML = `There was an error with the server request (${error}). <br> Click the button again.`;
    errorContainer.style.display = 'block';
    setTimeout(() => {
        errorContainer.innerHTML = '';
        errorContainer.style.display = 'none';
    }, 4000)
}
