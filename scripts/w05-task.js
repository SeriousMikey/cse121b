/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples = (templeList) => {
    templeList.forEach(item => {
        let newArticle = document.createElement("article");
        let newH3 = document.createElement("h3");
        newH3.innerHTML = item.templeName;
        let newImage = document.createElement("img");
        newImage.setAttribute("src", item.imageUrl);
        newImage.setAttribute("alt", item.location);
        newArticle.appendChild(newH3);
        newArticle.appendChild(newImage);
        templesElement.appendChild(newArticle);
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    document.querySelector("#temples").innerHTML = "";
};

/* sortBy Function */
const sortBy = (temples) => {
    reset(temples);
    let filter = document.querySelector("#sortBy");


    switch(filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});

getTemples();