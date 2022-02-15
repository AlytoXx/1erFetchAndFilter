const box = document.getElementById("api");
const searchBar = document.getElementById("search-bar");
let hpCharacters = [];

fetch("https://strapi-gogokodo.herokuapp.com/api/sources")
    .then((response) => response.json())
    .then((response) => traitement(response.data)) // fonction qui renvoi donnée
    .catch((error) => alert("erreur :" + error)); // facultatif

//le fetch sort du mécanisme

function traitement(data) {
    // le Data correspond au données que l'on récupére
    for (video of data) {
        // console.log(video);

        box.innerHTML += `<div class="t1">
        <h4 id="tt">${video.attributes.title}</h4>
        <button type="button" class="bloc">Vérifier</button>
    </div>`;
    }
}

searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});