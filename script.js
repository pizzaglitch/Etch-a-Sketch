//Function to create 16 divs using a for loop
const blockAmount = 256;

function generateGrid() {

    for(i=0; i < blockAmount; i++) {
        const grid = document.createElement("div");
        grid.className = "gridBox";
        document.getElementById("gridContainer").appendChild(grid);

        
    }
}
generateGrid(blockAmount);

//Function for hover color change 
const hover = document.getElementById("gridContainer");

hover.addEventListener("mouseenter", function (event) {
    event.target.style.background = "orange";
    });


//Function for button to prompt user to input size of gridContainer 
const gridClear = document.getElementById("gridClear");
