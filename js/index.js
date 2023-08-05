var images = document.getElementsByTagName("img");

//var audios = []

var audios = document.getElementsByTagName("audio");


/*
for(var i = 0; i < 3; i++){
    var destination = "../audio/sound-" + (i+1) + ".mp3";
    var audio = new Audio(destination);
    audio.loop = true;
    audios[i] = audio;
}
*/

var activated = [false,false,false];
for(var i = 0; i < images.length/2; i++){
    images[i].classList.toggle("animate__animated");
    images[i].addEventListener("click",Music);

}

function Music(event){
    var index = parseInt(event.target.alt)-1;
    if(!activated[index]){
        activated[index]=true;
        audios[index].play();
        images[index].classList.toggle("animate__animated");
        images[index+3].style.visibility = "visible";
    }
    else{
        activated[index]=false;
        audios[index].pause();
        audios[index].currentTime = 0;
        images[index].classList.toggle("animate__animated");
        images[index+3].style.visibility = "hidden";
    }
}





