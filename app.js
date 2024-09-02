// variables

const tempoDisplay = document.querySelector(".tempo");
const tempoText = document.querySelector(".tempo-text");

const increaseTempoButton = document.querySelector(".increase-tempo");
const decreaseTempoButton = document.querySelector(".decrease-tempo");
const tempoSlider = document.querySelector(".slider");

const startStopButton = document.querySelector(".start-stop");

const addBeatsButton = document.querySelector(".add-beats");
const subtractBeatsButton = document.querySelector(".subtract-beats");
const measuresDisplay = document.querySelector(".measure-count");

let tempo = 150;
let measures = 4;

// event listeners section

// +/- BPM buttons
increaseTempoButton.addEventListener("click", () => {
  if (tempo >= 280) {
    return;
  }
  tempo += 1;
  tempoDisplay.textContent = tempo;
  tempoSlider.value = tempo;
  console.log(tempo);
});

decreaseTempoButton.addEventListener("click", () => {
  if (tempo <= 20) {
    return;
  }
  tempo -= 1;
  tempoDisplay.textContent = tempo;
  tempoSlider.value = tempo;
  console.log(tempo);
});

// slider handling
tempoSlider.addEventListener("input", () => {
  tempo = +tempoSlider.value;
  tempoDisplay.textContent = tempo;
  tempoSlider.value = tempo;
});

// +/- measures buttons
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
