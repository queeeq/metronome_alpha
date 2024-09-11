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

// descriptions according to BPM
function updateMetronome() {
  if (tempo >= 20 && tempo <= 45) {
    tempoTextString = "Grave";
  }
  if (tempo > 45 && tempo <= 60) {
    tempoTextString = "Lento";
  }
  if (tempo > 60 && tempo <= 66) {
    tempoTextString = "Larghetto";
  }
  if (tempo > 66 && tempo <= 76) {
    tempoTextString = "Adagio";
  }
  if (tempo > 76 && tempo <= 108) {
    tempoTextString = "Andante";
  }
  if (tempo > 108 && tempo <= 120) {
    tempoTextString = "Moderato";
  }
  if (tempo > 120 && tempo <= 156) {
    tempoTextString = "Allegro";
  }
  if (tempo > 156 && tempo <= 176) {
    tempoTextString = "Vivace";
  }
  if (tempo > 176 && tempo <= 200) {
    tempoTextString = "Presto";
  }
  if (tempo > 200 && tempo <= 280) {
    tempoTextString = "Prestissimo";
  }
  tempoDisplay.textContent = tempo;
  tempoSlider.value = tempo;
  tempoText.textContent = tempoTextString;
  console.log(tempo);
}

// startStopButton.addEventListener("click", () => {
//   setTimeout();
// });
