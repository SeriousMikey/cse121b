const itemsElement = document.querySelector("#items");
const cartElement = document.querySelector("#cart_items");
let itemList = [];
let cartList = [];

const displayItems = (itemList) => {
    itemList.forEach(object => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4")
        let img = document.createElement("img");
        h3.innerHTML = object.itemName;
        h4.innerHTML = `Price: ${object.itemPrice} coins`;
        img.setAttribute("src", object.itemImage);
        img.setAttribute("alt", object.itemDescription);
        img.setAttribute("title", object.itemDescription);
        h4.setAttribute("id", object.itemName);
        div.setAttribute("id", object.itemIdentity);
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(h4);
        itemsElement.appendChild(div);
    });
};

const addItems = (object) => {
    let p = document.createElement("p");
    p.innerHTML = `${object.itemName}`;
    cartElement.appendChild(p);
}

const getItems = async () => {
    const response = await fetch("https://run.mocky.io/v3/8586e74d-e3d9-42ef-b9a8-1383491a2f78");
    itemList = await response.json();
    displayItems(itemList);
};

filter = document.querySelector("#filter_button");

const displayFilter = (filter) => {
    if (filter === "all") {
        itemList.forEach(object => {
            document.querySelector(`#${object.itemIdentity}`).style.display = "block";
        });
        return;
    }

    itemList.forEach(object => {
        if (object.itemClass.includes(filter)) {
            document.querySelector(`#${object.itemIdentity}`).style.display = "block";
        } else {
            document.querySelector(`#${object.itemIdentity}`).style.display = "none";
        };
    });
};

document.getElementById("filter_button").addEventListener("change", () => {
    const selectedFilter = document.getElementById("filter_button").value;
    displayFilter(selectedFilter);
});

getItems();