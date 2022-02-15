const box = document.getElementById("api");
const searchBar = document.getElementById("searchBar");
let tab = [];

searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredtitle = tab.filter((hub) => {
        return (
            hub.attributes.title.toLowerCase().includes(searchString) ||
            hub.attributes.category.toLowerCase().includes(searchString)
        );
    });
    traitement(filteredtitle);
});
//  console.log(searchBar);

fetch("https://strapi-gogokodo.herokuapp.com/api/sources")
    .then((response) => response.json())
    .then((response) => {
        traitement(response.data);
        tab = response.data;
    }) // fonction qui renvoi donnée
    .catch((error) => alert("erreur :" + error)); // facultatif

//le fetch sort du mécanisme

function traitement(data) {
    // le Data correspond au données que l'on récupére
    box.innerHTML = " "; //??
    for (video of data) {
        console.log(data);
        console.log(video.attributes.title);

        box.innerHTML += `<div class="t1">
        <h4 id="tt">${video.attributes.title}</h4>
        <button type="button" class="bloc">Vérifier</button>
    </div>`;
    }
}