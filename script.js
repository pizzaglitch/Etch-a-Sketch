//Function to create 16 divs using a for loop
const container = document.getElementById("gridContainer");
function generateGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(i=0; i < (rows * cols); i++) {
        const cell = document.createElement("div");
        // cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-item";
    }
}
generateGrid(16,16);

// Function for hover color change 
const hover = document.getElementById("gridContainer");
hover.addEventListener("mouseover", function (event) {
    if (event.target.id !== "gridContainer") {
    event.target.style.backgroundColor = "orange";
    }
}, );

// Function for button to clear grid 
const gridButton = document.getElementById("gridButton");

gridButton.onclick = function () {
    let newGridAmount = prompt("How many squares per side would you like on your new grid?");
    let element = document.getElementsByClassName('grid-item');
    newGridAmount = parseInt(newGridAmount);
    // for loop to clear gridContainer
    for (i=0; i < (element.length); i++) {
        element[i].style.backgroundColor = '';
    }
    
    //for loop to create new grid
    if (newGridAmount < 100) {
        // delete previous divs 
        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
        removeAllChildNodes(container);
        
    //create new grid
    function generateNewGrid(newGridAmount) {
        container.style.setProperty('--grid-rows', newGridAmount);
        container.style.setProperty('--grid-cols', newGridAmount);
        for(j=0; j < (newGridAmount * newGridAmount); j++) {
            const cell = document.createElement("div");
            // cell.innerText = (j + 1);
            container.appendChild(cell).className = "grid-item";
        }
    }
    generateNewGrid(newGridAmount);
    // error alert if grid amount is over 99
    } else if (newGridAmount > 99) {
        alert("Oops! You broke the machine! Please enter a value lower than 100.")
    }
}