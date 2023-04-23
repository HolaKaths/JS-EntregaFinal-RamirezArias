//Random pet



const imageContainer = document.getElementById('image-container');

function getRandomDoggo() {
  fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1', {
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
  let url = data[0].url;
  let breedName = data[0].breeds[0].name;
  imageContainer.innerHTML = `<img alt="random image of a ${breedName}" src='${url}'/>`;
  document.querySelector('.dogInfo').innerHTML = `<p class="h5">Random image of a ${breedName}</p>`;
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
