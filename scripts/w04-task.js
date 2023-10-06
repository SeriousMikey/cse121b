/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Michael Paul Hyer",
    photo: "images/me.jpg",
    favoriteFoods: ["Crepes", "Burgers", "Pizza", "Mac n Cheese", "Chicken", "Chimichangas"],
    hobbies: ["Gaming", "Game Development", "Laying down"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
    place: "Layton, Utah",
    length: "15 years"
});

myProfile.placesLived.push(
    {
    place: "Clinton, Utah",
    length: "5 years"
});

myProfile.placesLived.push(
    {
    place: "Clearfield, Utah",
    length: "1 year"
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector('img');
imageElement.setAttribute("src", myProfile.photo);
imageElement.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((place, length) => {
    let dt = document.createElement("dt");
    dt.textContent = place;
    let dd = document.createElement("dd");
    dd.textContent = length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
