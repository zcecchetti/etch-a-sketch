
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
            div.setAttribute("id", `${height}_${width}`)
            div.classList.add("blankElement");
            div.setAttribute("onmouseover", "colorElement(this)");
            let newColor = setRainbow();
            console.log(setRainbow());
            div.setAttribute("style", `background-color: ${newColor}`);
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
        obj.classList.remove("coloredElementBlue");
        obj.classList.remove("coloredElementRed");
        obj.classList.remove("coloredElementGreen");
        obj.classList.remove("blankElement");
    } else if (colorCall === 2) {
        
        obj.classList.add("coloredElementBlue");
        obj.classList.remove("coloredElementBlack");
        obj.classList.remove("coloredElementRed");
        obj.classList.remove("coloredElementGreen");
        obj.classList.remove("blankElement");
    } else if (colorCall === 3) {

        obj.classList.add("coloredElementRed");
        obj.classList.remove("coloredElementBlue");
        obj.classList.remove("coloredElementBlack");
        obj.classList.remove("coloredElementGreen");
        obj.classList.remove("blankElement");
    } else if (colorCall === 4) {

        obj.classList.add("coloredElementGreen");
        obj.classList.remove("coloredElementBlue");
        obj.classList.remove("coloredElementRed");
        obj.classList.remove("coloredElementBlack");
        obj.classList.remove("blankElement");
    } else {

        obj.classList.add("coloredElementRainbow");
        obj.classList.remove("coloredElementBlue");
        obj.classList.remove("coloredElementRed");
        obj.classList.remove("coloredElementGreen");
        obj.classList.remove("blankElement");
    }
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

let colors = ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"];

function setRainbow() {

    let rainbowColor = colors[Math.floor(Math.random() * colors.length)];
    return rainbowColor;
}

blackButton.addEventListener("click", changeToBlack);
blueButton.addEventListener("click", changeToBlue);
redButton.addEventListener("click", changeToRed);
greenButton.addEventListener("click", changeToGreen);
rainbowButton.addEventListener("click", changeToRainbow);