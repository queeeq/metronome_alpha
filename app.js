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
let tempoTextString = "Moderate";

// event listeners section

// +/- BPM buttons
increaseTempoButton.addEventListener("click", () => {
  if (tempo >= 280) {
    return;
  }
  tempo += 1;
  updateMetronome();
});

decreaseTempoButton.addEventListener("click", () => {
  if (tempo <= 20) {
    return;
  }
  tempo -= 1;
  updateMetronome();
});

// slider handling
tempoSlider.addEventListener("input", () => {
  tempo = +tempoSlider.value;
  updateMetronome();
});

// +/- measures buttons
addBeatsButton.addEventListener("click", () => {
  if (measures >= 12) {
    return;
  }
  measures += 1;
  measuresDisplay.textContent = measures;
  console.log(measures);
});

subtractBeatsButton.addEventListener("click", () => {
  if (measures <= 1) {
    return;
  }
  measures -= 1;
  measuresDisplay.textContent = measures;
  console.log(measures);
});

function updateMetronome() {
  tempoDisplay.textContent = tempo;
  tempoSlider.value = tempo;
  tempoText.textContent = tempoTextString;
  if (tempo <= 40) {
    tempoTextString = "Very Slow";
  }
  if (tempo > 40 && tempo < 80) {
    tempoTextString = "Slow";
  }
  if (tempo >= 80 && tempo < 120) {
    tempoTextString = "Walking pace";
  }
  if (tempo >= 120 && tempo < 160) {
    tempoTextString = "Moderate";
  }
  if (tempo >= 160 && tempo < 200) {
    tempoTextString = "Fast";
  }
  if (tempo >= 200 && tempo < 240) {
    tempoTextString = "Very Fast";
  }
  if (tempo >= 240 && tempo <= 280) {
    tempoTextString = "Extremely Fast";
  }
  console.log(tempo);
}
