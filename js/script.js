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

function fillGrid(color) {
  const grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
    grid.addEventListener('mouseover', function () {
      if (color === 'random') {
        grid.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
      } else {
        grid.style.backgroundColor = color;
      }
    });
  });
}

const canvas = document.createElement('div');
canvas.className = 'canvas';
document.body.appendChild(canvas);
const buttonContainer = document.querySelector('.button-container');
let color = 'black';

buttonContainer.addEventListener('click', (e) => {
  let target = e.target;

  switch (target.id) {
    case 'generate-grid':
      let userInput = +prompt("Enter the number of grids (MAX: 100)");
      generateGrid(userInput);
      fillGrid(color);
      break;

    case 'random-color':
      color = 'random'
      fillGrid(color);
      break;

    case 'dark-effect':
      // Task for future
      break;

    case 'eraser':
      color = '#fff';
      fillGrid(color);
      break;
  }
});

generateGrid();
fillGrid(color);
