
//RANDOM PET
function getRandomDoggo() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(checkStatus)
        .then(response => response.json())
        .then(data => handleData(data))
        .catch(error => notifyUser(error))
}

randomButton.addEventListener('click', getRandomDoggo);

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function handleData(data) {
    let url = data.message;
    console.log(url)
    let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+\-?\w+)\/.+/g;
    let breedName = regex.exec(url);
    document.getElementById('randomImageContainer').innerHTML = `<img alt="random image of a ${fixBreed(breedName[1])}" src='${url}'/>`;
    document.querySelector('.dogInfo').innerHTML = `<p class="h5">Random image of a ${fixBreed(breedName[1])}</p>`;
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
