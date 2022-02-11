
// Get user input height and width values from text box

const displayHeight = document.getElementById("height");
const displayWidth = document.getElementById("width");
const divContainer = document.getElementById("divContainer");
const row = document.querySelector(".row");



function createDisplay(displayWidth, displayHeight) {

    for (let width = 0; width < displayWidth; width++) {
        const div = document.createElement('div');
        div.classList.add("blankElement");
        row.appendChild(div);
    };

    for (let height = 1; height < displayHeight; height++) {
        const rowClone = row.cloneNode(true);
        divContainer.appendChild(rowClone);
    }
};