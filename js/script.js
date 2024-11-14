function generateGrid(gridSize = 16) {
  const squareSize = Math.floor(Math.min(canvas.offsetWidth, canvas.offsetHeight) / gridSize);

  canvas.innerHTML = '';

  for (let i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement('div');
    grid.style.width = `${squareSize}px`;
    grid.style.height = `${squareSize}px`;
    grid.className = 'grid';
    canvas.appendChild(grid);
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 255);
}



const canvas = document.createElement('div');
canvas.className = 'canvas';
document.body.appendChild(canvas);
let color = 'black';
generateGrid();

const grids = document.querySelectorAll('.grid');
grids.forEach(grid => {
  grid.addEventListener('mouseover', function () {
    // grid.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
    grid.style.backgroundColor = color;
  });
});

