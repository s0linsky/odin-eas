// Define global variables
const colorMode = "color";
const rainbowMode = "rainbow";
const eraserMode = "eraser";
const clearMode = "clear";
const defaultMode = "color";
const defaultSize = "35";
const defaultColor = "#333";
let currentSize = defaultSize;
let currentColor = defaultColor;
let currentMode = defaultMode;
let size;

// Select the wrapper
const wrapper = document.getElementById("wrapper");

// Select the container div
const container = document.getElementById("grid-container");

// Create the grid
function makeGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 20px)`;
  container.style.gridTemplateRows = `repeat(${size}, 20px)`;
  for (i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.id = "grid-cell";
    cell.style.backgroundColor = "rgb(167, 173, 133)";
    cell.addEventListener("mouseover", changeColor);
    cell.addEventListener("mousedown", changeColor);
    container.appendChild(cell);
  }
}

// Mouse toggle
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Change the grid size
function gridSize() {
  let newSize = prompt("What size?");
}

// Change the color
function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "rainbow") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "rgb(167, 173, 133)";
  }
}

// Grid size button
let gridBtn = document.getElementById("size");
gridBtn.addEventListener("click", () => {
  gridSize();
});

// Color mode
let colorBtn = document.getElementById("color");
currentMode = colorMode;
colorBtn.addEventListener("click", () => {});

// Rainbow Mode
let rainbowBtn = document.getElementById("rainbow");
rainbowBtn.addEventListener("click", () => {
  currentMode = rainbowMode;
});

// Eraser mode
eraserBtn = document.getElementById("eraser");
eraserBtn.addEventListener("click", () => {
  currentMode = eraserMode;
});

// Clear mode
clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  const gridContainer = document.getElementById("grid-container");
  const cells = gridContainer.getElementsByTagName("*");
  for (i = 0; i < cells.length; i++) {
    cell = cells[i];
    cell.style.backgroundColor = "rgb(167, 173, 133)";
  }
});

// Call the makeGrid function
makeGrid(defaultSize);
