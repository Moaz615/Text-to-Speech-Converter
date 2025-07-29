let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]
});

let rate = 1;
const minRate = 0.5;
const maxRate = 2;
const step = 0.1;
const rateValue = document.getElementById('rate-value');
const rateDecrease = document.getElementById('rate-decrease');
const rateIncrease = document.getElementById('rate-increase');

rateDecrease.addEventListener('click', () => {
    if (rate > minRate) {
        rate = Math.round((rate - step) * 10) / 10;
        rateValue.textContent = rate;
        updateSpeechInstantly();
    }
});
rateIncrease.addEventListener('click', () => {
    if (rate < maxRate) {
        rate = Math.round((rate + step) * 10) / 10;
        rateValue.textContent = rate;
        updateSpeechInstantly();
    }
});

const volumeInput = document.getElementById('volume');
const volumeValue = document.getElementById('volume-value');

volumeInput.addEventListener('input', () => {
    volumeValue.textContent = volumeInput.value;
});

document.querySelector("button").addEventListener("click", () => {
    window.speechSynthesis.cancel();
    speech.text = document.querySelector("textarea").value;
    speech.rate = rate;
    speech.volume = parseFloat(volumeInput.value);
    if (speech.text.trim() !== "") {
        window.speechSynthesis.speak(speech);
    }
});

function updateSpeechInstantly() {
    window.speechSynthesis.cancel();
    speech.text = document.querySelector("textarea").value;
    speech.rate = rate;
    speech.volume = parseFloat(volumeInput.value);
    if (speech.text.trim() !== "") {
        window.speechSynthesis.speak(speech);
    }
}
document.getElementById("stop").addEventListener("click", () => {
    window.speechSynthesis.cancel();
});