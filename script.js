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
    let newGridAmount = prompt("How many squares per side would you like on your new grid?");
    let element = document.getElementsByClassName('grid');
    // for loop to clear gridContainer
    for (i=0; i < blockAmount; i++) {
        element[i].style.backgroundColor = '';
    }
    if (newGridAmount > 99) {
        return alert("Please enter fewer than 100 squares per side.")
    }

    // for loop to create prompted grid input amount 
    // function generateNewGrid () {
    //     if (gridAmount > 99) {
    //         prompt("Please enter a grid of 99 squares or fewer."); 
    //     } else if (gridAmount < 99) {
    //         newGridContainer = document.getElementById('gridContainer');
    //         newGridContainer[0].style.gridTemplateColumns = repeat(gridAmount);
    //         newGridContainer[0].style.gridTemplateRows = repeat(gridAmount);
    //     }
    //     generateGrid(newGridAmount)
    // }

    
    
}

//Function for button to prompt user to input size of gridContainer 
// gridButton.onclick = function() {
//     prompt("How many squares per side would you like on your new grid?");

