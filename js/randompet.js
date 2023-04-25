function obtenerRazaAleatoria() {
    const randomImageContainer = document.getElementById("randomImageContainer");
    const existingImage = randomImageContainer.querySelector("img");
    if (existingImage) {
      existingImage.remove();
    }
  
    const alert = document.getElementById("alert");
  
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar la imagen");
        }
        return response.json();
      })
      .then(data => {
        const img = document.createElement("img");
        img.src = data.message;
        randomImageContainer.appendChild(img);
        alert.style.display = "none";
      })
      .catch(error => {
        console.error(error);
        alert.style.display = "block";
        alert.textContent = error.message;
      });
  }