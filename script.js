// Define global variables
const colorMode = "color";
const rainbowMode = "rainbow";
const eraserMode = "eraser";
const clearMode = "clear";
const defaultMode = "color";
const defaultSize = "24";
const defaultColor = "#333";
let currentSize = defaultSize;
let currentColor = defaultColor;
let currentMode = defaultMode;

// Mouse toggle
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

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

// Change the grid size
function resetSize() {
  let newSize = prompt("What size?");
  if (newSize === undefined || newSize === null || newSize === "") {
    return;
  }
  while (newSize > 100) {
    newSize = prompt("Too big! Must be 100 or less.");
  }
  const gridContainer = document.getElementById("grid-container");
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  makeGrid(newSize);
  let gridItemList = document.querySelectorAll(".grid-item");
  gridItemList.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", changeColor);
  });
  gridItemList.forEach((gridItem) => {
    gridItem.addEventListener("mousedown", changeColor);
  });
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

function clearGrid() {
  const gridContainer = document.getElementById("grid-container");
  const cells = gridContainer.getElementsByTagName("*");
  for (i = 0; i < cells.length; i++) {
    cell = cells[i];
    cell.style.backgroundColor = "rgb(167, 173, 133)";
  }
}

// Grid size btn
let gridBtn = document.getElementById("size");
gridBtn.addEventListener("click", () => {
  resetSize();
});

// Color mode btn
let colorBtn = document.getElementById("color");
currentMode = colorMode;
colorBtn.addEventListener("click", () => {
  currentMode = colorMode;
});

// Rainbow mode btn
let rainbowBtn = document.getElementById("rainbow");
rainbowBtn.addEventListener("click", () => {
  currentMode = rainbowMode;
});

// Eraser mode btn
eraserBtn = document.getElementById("eraser");
eraserBtn.addEventListener("click", () => {
  currentMode = eraserMode;
});

// Clear btn
clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  const gridContainer = document.getElementById("grid-container");
  const cells = gridContainer.getElementsByTagName("*");
  for (i = 0; i < cells.length; i++) {
    cell = cells[i];
    cell.style.backgroundColor = "rgb(167, 173, 133)";
  }
});

window.onload = () => {
  makeGrid(defaultSize);
};
