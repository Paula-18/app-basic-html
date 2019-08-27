const buttons = document.querySelectorAll('button');

const playnote = ()=>{

    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;
    //console.log(audioId)
    console.log(audioId);
    const audio = document.getElementById(audioId);
    console.log(audio);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

buttons.forEach(
    button => button.addEventListener('click', playnote) 
);