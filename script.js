

function triggerPlay (event){
    const keycode = event.keyCode;
    const audio = document.querySelector(`audio[data-key="${keycode}"]`);
    const key = document.querySelector(`.key[data-key="${keycode}"]`);
    if(!audio)return; //stops the function from execution 
    audio.play(event);// adds a play state to the audio
    audio.currentTime = 0; //re-runs the sound
    key.classList.add("playing"); // adds a class of playing (defined in css) to the event

}

function removetransition(event){
    if(event.propertyName !=="transform")return ;
    this.classList.remove("playing");
}

window.addEventListener("keydown", triggerPlay )

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removetransition))