// variables
let tempo = 120;
let measures = 4;

const increaseTempoButton = document.querySelector(".increase-tempo");
const decreaseTempoButton = document.querySelector(".decrease-tempo");
const addBeatsButton = document.querySelector(".add-beats");
const subtractBeatsButton = document.querySelector(".subtract-beats");
const tempoDisplay = document.querySelector(".tempo");
const measuresDisplay = document.querySelector(".measure-count");

// event listeners section
increaseTempoButton.addEventListener("click", () => {
  tempo += 1;
  tempoDisplay.textContent = tempo;
  console.log(tempo);
});

decreaseTempoButton.addEventListener("click", () => {
  tempo -= 1;
  tempoDisplay.textContent = tempo;
  console.log(tempo);
});

addBeatsButton.addEventListener("click", () => {
  measures += 1;
  measuresDisplay.textContent = measures;
  console.log(measures);
});

subtractBeatsButton.addEventListener("click", () => {
  measures -= 1;
  measuresDisplay.textContent = measures;
  console.log(measures);
});
