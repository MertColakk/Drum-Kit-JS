for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        playSound(this.innerHTML);
    });
}

document.addEventListener("keypress",function (event){
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(key){
    let audio;
    switch(key){
        case 'w':
            audio = new Audio('./sounds/tom-1.mp3');
            break;
        case 'a':
            audio = new Audio('./sounds/tom-2.mp3');
            break;
        case 's':
            audio = new Audio('./sounds/tom-3.mp3');
            break;
        case 'd':
            audio = new Audio('./sounds/tom-4.mp3');
            break;
        case 'j':
            audio = new Audio('./sounds/snare.mp3');
            break;
        case 'k':
            audio = new Audio('./sounds/crash.mp3');
            break;
        case 'l':
            audio = new Audio('./sounds/kick-bass.mp3');
            break;
        default:
            console.log("Didn't clicked the drum parts!");
            break;
        
    }
    audio.play();
}

function buttonAnimation(currentKey){
    let button = document.querySelector("."+currentKey);

    button.classList.add("pressed");

    setTimeout(function (){button.classList.remove("pressed")},125);
}
