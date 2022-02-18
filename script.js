//Function to create 16 divs using a for loop
const blockAmount = 257;
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
    if (event.target.id !== "gridContainer") {
    event.target.style.backgroundColor = "orange";
    }
}, );

// Function for button to clear grid 
const gridButton = document.getElementById("gridButton");

gridButton.onclick = function() {
    let gridAmount = prompt("How many squares per side would you like on your new grid?");
    let element = document.getElementsByClassName('grid');
    let newGridContainer = document.getElementById('gridContainer');
    // for loop to clear gridContainer
    for (i=0; i < blockAmount; i++) {
        element[i].style.backgroundColor = '';
    }
    // for loop to create prompted grid input amount 
    

    
    
}

//Function for button to prompt user to input size of gridContainer 
// gridButton.onclick = function() {
//     prompt("How many squares per side would you like on your new grid?");
// }
