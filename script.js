// Select the container div
const container = document.getElementById("container");

// Create the grid
function makeGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 20px)`;
  container.style.gridTemplateRows = `repeat(${size}, 20px)`;
  for (i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.id = "grid-cell";
    // cell.innerText = i + 1;
    container.appendChild(cell);
  }
}

// Call the makeGrid function
makeGrid(16);
