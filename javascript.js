
// Get user input height and width values from text box and create

const generate = document.querySelector("#generate");
generate.addEventListener("click", () => {
    let displayHeight = document.getElementById("height").value;
    let displayWidth = document.getElementById("width").value;  

    if (displayHeight > 100) {
        displayHeight = 100;
    };

    if (displayWidth > 100) {
        displayWidth = 100;
    };

    createDisplay(displayWidth, displayHeight);
});

function createDisplay(displayWidth, displayHeight) {

    resetToZero();
    const divContainer = document.getElementById("divContainer");
    

    for (let height = 0; height < displayHeight; height++) {
        const row = document.createElement("p");
        row.classList.add("row");

        for (let width = 0; width < displayWidth; width++) {
            const div = document.createElement('div');
            div.classList.add("blankElement");
            div.setAttribute("onmouseover", "colorElement(this)");
            row.appendChild(div);
        };

        divContainer.appendChild(row);
    }
};

// Reset number of elements in container to 0

function resetToZero() {
    const divContainer = document.getElementById("divContainer");

    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
    };
};

// Reset button event listener that creates a default resolution at 96 x 54

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    const etchSketch = document.getElementById("etchSketch");
    const displayHeight = 54;
    const displayWidth = 96; 

    etchSketch.classList.add("etchShake");
    createDisplay(displayWidth, displayHeight);
    setTimeout(() => {etchSketch.classList.remove("etchShake")}, 1000);
});

// On page load, generate default resolution

window.onload = function() {

    const displayHeight = 54;
    const displayWidth = 96; 

    createDisplay(displayWidth, displayHeight);
}

// Function to change element class's when mouse hovers over

function colorElement(obj) {

    obj.classList.add("coloredElementBlack");
    obj.classList.remove("blankElement");
};