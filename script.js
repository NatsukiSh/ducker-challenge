//Select the relevant elements from the HTML
const grid = document.querySelector(".grid ");
const timer = document.querySelector(".timer");
const endGameScreen = document.querySelector(".end-game-screen");
const endGameText = document.querySelector(".end-game-text");
const playAgainBtn = document.querySelector(".play-again");

//nested Array
const gridMatrix = [
  ["", "", "", "", "", "", "", "", ""],
  [
    "river",
    "wood",
    "wood",
    "river",
    "wood",
    "river",
    "river",
    "river",
    "river",
  ],
  ["river", "river", "river", "wood", "wood", "river", "wood", "wood", "river"],
  ["", "", "", "", "", "", "", "", ""],
  ["road", "bus", "road", "road", "road", "car", "road", "road", "road"],
  ["road", "road", "road", "car", "road", "road", "road", "road", "bus"],
  ["road", "road", "car", "road", "road", "road", "bus", "road", "road"],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
];

//Initialize variables that control the game 'settings'
const victoryRow = 0;
const riverRows = [1, 2];
const roadRows = [4, 5, 6];
const duckPosition = { x: 4, y: 8 }; //x:horizontal y:vertical
let contentBeforeDuck = "";
let time = 15;

function drawGrid() {
  grid.innerHTML = "";

  //For each row in the gridMatrix,
  //need to process what is going to be drawn/display
  //on the screen
  gridMatrix.forEach(function (gridRow, gridRowIndex) {
    gridRow.forEach(function (cellContent, cellContentIndex) {
      // Given the current grid row, create a cell for the grid
      //in the game based on the cellContent
      //<div></div>
      const cellDiv = document.createElement("div");
      //<div class="cell"></div>
      cellDiv.classList.add("cell");

      //[1,2]
      if (riverRows.includes(gridRowIndex)) {
        cellDiv.classList.add("cell");
        //[4,5,6]
      } else if (roadRows.includes(gridRowIndex)) {
        cellDiv.classList.add("road");
      }

      //''-->"falsy"
      //false-->boolean
      //"river","road","car","bus","wood-->"truthy"
      if (cellContent) {
        cellDiv.classList.add(cellContent);
      }

      grid.appendChild(cellDiv);
    });
  });
}

function placeDuck() {
  contentBeforeDuck = gridMatrix[duckPosition.y][duckPosition.x];
  gridMatrix[duckPosition.y][duckPosition.x] = "duck";
  //gridMatrix[8][4]='duck'
  //  ["", "", "", "", "duck", "", "", "", ""]
}

function moveDuck(event) {
  const key = event.key;
  console.log("key", key);
  console.log("contentBeforeDuck:", contentBeforeDuck);
  gridMatrix[duckPosition.y][duckPosition.x] = contentBeforeDuck;

  switch (key) {
    case "ArrowUp":
      if (duckPosition.y > 0) duckPosition.y--;
      break;
    case "ArrowDown":
      if (duckPosition.y < 8) duckPosition.y++;
      break;
    case "ArrowLeft":
      if (duckPosition.x > 0) duckPosition.x--;
      break;
    case "ArrowRight":
      if (duckPosition.x < 8) duckPosition.x++;
      break;
  }

  render();
}

function render() {
  placeDuck();
  drawGrid();
}

const renderLoop = setInterval(render, 600);

document.addEventListener("keyup", moveDuck);
