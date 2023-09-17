/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Michael Paul Hyer";
let currentYear = "2023";
let profilePicture = "/images/me.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
/*nameElement.textContent = currentYear;*/
imageElement.setAttribute("src", `${profilePicture}`);
imageElement.setAttribute("alt", `${fullName}`);

/* Step 5 - Array */
foodArray = ["Crepes", "Burgers", "Pizza", "Mac n Cheese", "Chicken"]
foodElement.innerText = `${foodArray}`;
let newFavoriteFood = "Chimichangas";
foodArray.push(newFavoriteFood)
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;