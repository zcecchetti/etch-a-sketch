
// Get user input height and width values from text box and create

const generate = document.querySelector("#generate");
generate.addEventListener("click", () => {
    const displayHeight = document.getElementById("height").value;
    const displayWidth = document.getElementById("width").value;  

    createDisplay(displayWidth, displayHeight);
});

function createDisplay(displayWidth, displayHeight) {

    resetToZero();
    const divContainer = document.getElementById("divContainer");
    const row = document.createElement("div");
    row.classList.add("row");

    for (let width = 0; width < displayWidth; width++) {
        const div = document.createElement('div');
        div.classList.add("blankElement");
        row.appendChild(div);
    };

    for (let height = 0; height < displayHeight; height++) {
        const rowClone = row.cloneNode(true);
        divContainer.appendChild(rowClone);
    }
};

// Reset number of elements in container to 0

function resetToZero() {
    const divContainer = document.getElementById("divContainer");

    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
    };
};