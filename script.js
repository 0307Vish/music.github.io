console.log("welcome to sidhufy")

//Intialize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
// let playButton= document.getElementById('playButton');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let playButton = document.getElementById('playButton')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let bottomSongName = document.getElementById
('bottomSongName')
// let snd = document.getElementById('snd')
let sndBar=document.getElementById('sndProgressBar')
let vol= audioElement.volume =parseFloat((sndBar.value / 100));
// let btn= Array.from(document.getElementsByClassName('btn'))
// let progress = parseFloat((audioElement.currentTime / audioElement.duration) * 100)
// it is like array of object
let songs = [
    { songName: "So High", filePath: "song/1.mp3", coverPath: "cover/pg1.jpeg" },

    { songName: "The Last Ride", filePath: "song/2.mp3", coverPath: "cover/pg2.jpeg" },

    { songName: "Same Beef", filePath: "song/3.mp3", coverPath: "cover/pg3.jpeg" },

    { songName: "295", filePath: "song/4.mp3", coverPath: "cover/pg4.jpeg" },

    { songName: "Bambiha Bole", filePath: "song/5.mp3", coverPath: "cover/pg5.jpeg" },

    { songName: "Dollar", filePath: "song/6.mp3", coverPath: "cover/pg6.jpeg" },

    { songName: "Goat", filePath: "song/7.mp3", coverPath: "cover/pg7.jpeg" },

    { songName: "Tochan", filePath: "song/8.mp3", coverPath: "cover/pg1.jpeg" }

]

songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByClassName("src")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
    element.addEventListener('click', (e) => {
        
        songIndex = parseInt(e.target.id);
        audioElement.src = `song/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        playButton.classList.remove("fa-play");
        playButton.classList.add('fa-pause');
        gif.style.opacity = 1;
        bottomSongName.innerText = songs[songIndex-1].songName
    })
    
})
//handle play/pause click bottom  play button
playButton.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        //play song
        audioElement.play();
        // play gif
        gif.style.opacity = 1;
        //change bottom play button
        playButton.classList.remove("fa-play");
        playButton.classList.add('fa-pause');
        

    }
    else {
       
        audioElement.pause();
        gif.style.opacity = 0;
        playButton.classList.remove("fa-pause");
        playButton.classList.add('fa-play');
        btn.playButton.classList.remove('fa-pause');
        btn.playButton.classList.add('fa-play');
        makeAllPlays();

    }
})




//Listen to events update myprogress bar
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
   let progress = parseFloat((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress;
    
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime =parseFloat((myProgressBar.value * audioElement.duration) / 100);

})



//container button controll
const makeAllPlays = () => {
    btn.forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

// btn.forEach((element) => {
//              element.addEventListener('click', (e) => {

//                 if (audioElement.paused || audioElement.currentTime <= 0) {
//               // console.log(e.target);
//             makeAllPlays();
//             //button image  play  to pause    
//             e.target.classList.remove('fa-play');
//             e.target.classList.add('fa-pause');
//             // song play with btn
//             songIndex = parseInt(e.target.id);
//             // console.log(index)
//             audioElement.src = `song/${songIndex + 1}.mp3`;
//             audioElement.currentTime = 0;
//             audioElement.play();
//             gif.style.opacity = 1
//             playButton.classList.remove("fa-play");
//             playButton.classList.add('fa-pause');
//             bottomSongName.innerText = songs[songIndex].songName
           
//                 }
//                 else {
//                     makeAllPlays();
//                     audioElement.pause();
//                     gif.style.opacity = 0;
//                     playButton.classList.remove("fa-pause");
//                     playButton.classList.add('fa-play');
//                     btn.classList.remove('fa-pause');
//                     btn.classList.add('fa-play');
//                 }


     
//     })

// })





 //next
 {document.getElementById('next').addEventListener(`click`, () => {
    if (songIndex <= 6) {
        songIndex += 1;
    }
    else {
        songIndex = 0;

    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1
    playButton.classList.remove("fa-play");
    playButton.classList.add('fa-pause');
    bottomSongName.innerText = songs[songIndex].songName
})

}

// previous

document.getElementById('pre').addEventListener(`click`, () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;

    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1
    playButton.classList.remove("fa-play");
    playButton.classList.add('fa-pause');
    bottomSongName.innerText = songs[songIndex].songName

})


// automatic next when song completes
audioElement.addEventListener('ended',()=>{    
//play next song
    if (songIndex <= 6) {
        songIndex += 1;
    }
    else {
        songIndex = 0;

    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1
    bottomSongName.innerText = songs[songIndex].songName


})



snd.addEventListener('click',()=>{
    if(audioElement.muted==true){
        audioElement.muted=false;
        snd.classList.remove('fa-volume-xmark');
        snd.classList.add('fa-volume-low');
       
       
    }
    else{
        audioElement.muted=true;
        snd.classList.remove('fa-volume-low');
        snd.classList.add('fa-volume-xmark');
    }
   
      
    })

    
  


sndBar.addEventListener('change', () => {
   let vol= audioElement.volume =parseFloat((sndBar.value / 100));

})

















