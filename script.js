// Define global variables
const defaultSize = "20";
const defaultColor = "#333";
const colorMode = "color";
const eraserMode = "eraser";
const defaultMode = colorMode;
let currentSize = defaultSize;
let currentColor = defaultColor;
let currentMode = defaultMode;
let mouseDown = false;
// Mouse toggle
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

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
    container.appendChild(cell);
  }
}

// Change the color
function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "rgb(167, 173, 133)";
  }
}

// // Color mode
// colorMode = document.getElementById("color");
// colorMode.addEventListener("click", () => {
//   currentMode = defaultMode;
// });

// // Eraser mode
// eraserMode = document.getElementById("eraser");
// eraserMode.addEventListener("click", () => {
//   currentMode = "eraser";
// });

// Call the makeGrid function
makeGrid(16);
