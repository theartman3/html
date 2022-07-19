'use strict';
function addP() {
    let a = ["one", "tw0", 3];
    const ul = document.createElement("ul");
    const dv = document.getElementById("test-div");
    dv.appendChild(ul);
    a.forEach(item => ul.appendChild(createListItem(item)));
}

function createListItem(item) {
    const li = document.createElement("li");
    li.innerText = item;
    return li;
}

function clickHandler(event) {
    console.log(event.target.tagName);
}

document.addEventListener('DOMContentLoaded', addP);
document.addEventListener('click', clickHandler);