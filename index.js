const buttons = document.querySelectorAll('button');
let current = null;

const arrayBtns = Array.from(buttons);

for (const button of arrayBtns.values()){
  const btnId = button.getAttribute("id");
  const audio = new Audio(`./assets/audio/${btnId}.wav`);
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