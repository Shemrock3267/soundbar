import emojis from './emojis.js';

/** GENERATE BUTTONS */
const container = document.getElementsByClassName('container');
for (const emoji of emojis){
  const {emojiSymbol, idName} = emoji;

  const animalBtn = document.createElement('button');
  animalBtn.setAttribute('id', `${idName}`);
  animalBtn.setAttribute('class','btn');
  animalBtn.innerText = `${emojiSymbol}`;
  container[0].appendChild(animalBtn);
}

/** GRAB BUTTONS & ASSIGN SOUNDS */
const buttons = document.querySelectorAll('button');
let current = null;

const arrayBtns = Array.from(buttons);

for (const button of arrayBtns.values()){
  const btnId = button.getAttribute("id");
  const audio = new Audio(`./assets/audio/${btnId}_AUDIO.wav`);
  button.addEventListener('click', () => {
    if(current) {
      current.pause();
      current.currentTime = 0;
      current = null;
    };
    if(!current){
      current = audio;
    }
    audio.muted = false;
    audio.play();
  });
}