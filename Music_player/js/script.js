let progress = document.getElementById("progress");
let ctrlicon = document.getElementById("ctrlicon");
let song = document.getElementById("song");

song. onloadedmetadata = function(){
   progress.max = song.duration;
    progress.value= song.currentTime;
}
window.onload = function() {
    ctrlicon.classList.remove("fa-pause");
    ctrlicon.classList.add("fa-play");
}

function playpause()
{
    if(ctrlicon.classList.contains("fa-pause"))
    {
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlicon.classList.remove("fa-play");
        ctrlicon.classList.add("fa-pause");        

    }
}



song.addEventListener('play', () => {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500 );
});




progress.oninput = function() {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play();
    }
    ctrlicon.classList.remove("fa-play");
    ctrlicon.classList.add("fa-pause");
};



