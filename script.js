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
const duckPosition = { x: 4, y: 8 };
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
      }

      grid.appendChild(cellDiv);
    });
  });
}
drawGrid();
