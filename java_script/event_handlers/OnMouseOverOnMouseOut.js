// onMouseOver OnMouseOut
let planetImagesBox = document.getElementById("planets_images_container");

let planetImagesArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

let planetArrayIndex = 0;
// Event handler
function changePlanetImage() {
    planetImagesBox.style.backgroundImage = `url("../../assets/images/${planetImagesArray[planetArrayIndex++]}.png")`;
    if (planetArrayIndex == planetImagesArray.length) {
        planetArrayIndex = 0;
    }
}

