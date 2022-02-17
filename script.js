//Function to create 16 divs using a for loop
const blockAmount = 256;

function generateGrid() {

    for(i=0; i < blockAmount; i++) {
        const grid = document.createElement("div");
        grid.classList.add('grid');
        document.getElementById("gridContainer").appendChild(grid); 
    }
}
generateGrid(blockAmount);

// Function for hover color change 
const hover = document.getElementById("gridContainer");

hover.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "orange";
    });

// document.getElementById("gridContainer").onmouseover = function() {hoverColor()};

// function hoverColor() {
//     document.getElementById("gridContainer").style.backgroundColor = "orange";
    
// }

//Function for button to prompt user to input size of gridContainer 
const gridClear = document.getElementById("gridClear");
