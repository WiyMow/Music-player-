let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.ondurationchange;
    progress.value = song.currentTime; 
}

function PlayPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.p.remove("Play");
        ctrlIcon.p.add("Pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.p.add("Play");
        ctrlIcon.p.remove("pause");
        ctrlIcon.classList.remove("fa-play");
    }

}

if(song.play()){
setInterval(()=>{
    progress.value = song.currentTime;
},500)
}

progress.onchange =  function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}




