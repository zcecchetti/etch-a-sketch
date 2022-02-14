
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

let colorCall = 1;

// In colorCall, 1 = black, 2 = blue, 3 = red, 4 = green, 5 = rainbow

function colorElement(obj) {

    if (colorCall === 1) {

        obj.classList.add("coloredElementBlack");
    } else if (colorCall === 2) {
        
        obj.classList.add("coloredElementBlue");
    } else if (colorCall === 3) {

        obj.classList.add("coloredElementRed");
    } else if (colorCall === 4) {

        obj.classList.add("coloredElementGreen");
    } else {

        obj.classList.add("coloredElementRainbow");
    }
    
    obj.classList.remove("blankElement");
};

// Change color from black to rainbow

const blackButton = document.getElementById("black");
const blueButton = document.getElementById("blue");
const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const rainbowButton = document.getElementById("rainbow");

function changeToBlack() {

    colorCall = 1;
    return colorCall;
};

function changeToBlue() {

    colorCall = 2;
    return colorCall;
};

function changeToRed() {

    colorCall = 3;
    return colorCall;
};

function changeToGreen() {

    colorCall = 4;
    return colorCall;
};

function changeToRainbow() {

    colorCall = 5;
    return colorCall;
}

blackButton.addEventListener("click", changeToBlack);
blueButton.addEventListener("click", changeToBlue);
redButton.addEventListener("click", changeToRed);
greenButton.addEventListener("click", changeToGreen);
rainbowButton.addEventListener("click", changeToRainbow);