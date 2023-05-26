let image = document.querySelector('.img')
let artist = document.querySelector('.artist')
let title = document.querySelector('.title')
let audio = document.querySelector('audio')
let playBtn = document.getElementById('play')
let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('prev')
let progress = document.querySelector('.progress')
let progressConatiner = document.querySelector('.progrss-container')
let currentTime = document.querySelector('#current-time')
let duration = document.querySelector('#duration')

let playing = false
let songIndex = 0


playBtn.addEventListener('click', ()=> playing ? pauseSong() : playSong() )

function playSong(){
playBtn.classList.replace('fa-play','fa-pause')
playing = true
}


function pauseSong(){

playBtn.classList.replace('fa-pause','fa-play')
playing = false
}

let songs = [
    {  images : 'jacinto-1',
         songName : 'jacinto-1',
        titles :  'Electric Chill Machine',
        artists: 'Jacinto Design - 1',
    },
    {  images : 'jacinto-2',
    songName : 'jacinto-2',
        titles :  'Seven Nation Army (Remix)',
        artists: 'Jacinto Design - 2',
    },
    {  images : 'jacinto-3',
    songName : 'jacinto-3',
        titles :  'Goodnight, Disco Queen',
        artists: 'Jacinto Design - 3',
    },
    {  images : 'metric-1',
        songName : 'metric-1',
        titles :   'Front Row (Remix)',
        artists: 'Jacinto Design - 4',
    }
    
    
    ]

    function loadSong(songs){
    image.src = `img/${songs.images}.jpg`
    audio.src = `music/${songs.songName}.mp3`
    title.textContent = `${songs.titles}`
    artist.textContent = `${songs.artists}`

    }
    loadSong(songs[songIndex])


nextBtn.addEventListener('click', nextSong)

function nextSong(){
songIndex++


if(songIndex >= songs.length){
    songIndex = 0
}

loadSong(songs[songIndex])
}

prevBtn.addEventListener('click', prevSong)

function prevSong(){
songIndex--
if(songIndex < 0){
songIndex = songs.length - 1
}
loadSong(songs[songIndex])

}


audio.addEventListener('timeUpdate', ()=> updating())



progressConatiner.addEventListener('click' , (e)=> progressing(e))


function progressing(e){
    let width = e.target.clientWidth
    let x = e.offsetX

}


// progressConatiner.addEventListener('click', (e)=> setprogress(e))


// function setprogress(e){
// let width = e.target.clientWidth
// const clickX = e.offsetX;
// console.log(clickX);
// const { duration } = audios;
// audios.currentTime = (clickX / width) * duration;

// }







// let image = document.querySelector('.img')
// let artist = document.querySelector('.artist')
// let title = document.querySelector('.title')
// let audio = document.querySelector('audio')
// let playBtn = document.getElementById('play')
// let nextBtn = document.getElementById('next')
// let prevBtn = document.getElementById('prev')
// let progress = document.querySelector('.progress')
// let progressConatiner = document.querySelector('.progrss-container')
// let currentTime = document.querySelector('#current-time')
// let duration = document.querySelector('#duration')

// let playing = false
// let songIndex = 0




// playBtn.addEventListener('click', ()=> (Playing ? pauseSong() : playSong() ) )

// function playSong(){
// Playing = true
// playBtn.classList.replace('fa-play', 'fa-pause')
// audios.play()

// }

// function pauseSong(){
// Playing = false
// playBtn.classList.replace('fa-pause','fa-play')
// audios.pause()

// }


// let songs = [
//     {  images : 'jacinto-1',
//          songName : 'jacinto-1',
//         titles :  'Electric Chill Machine',
//         artists: 'Jacinto Design - 1',
//     },
//     {  images : 'jacinto-2',
//     songName : 'jacinto-2',
//         titles :  'Seven Nation Army (Remix)',
//         artists: 'Jacinto Design - 2',
//     },
//     {  images : 'jacinto-3',
//     songName : 'jacinto-3',
//         titles :  'Goodnight, Disco Queen',
//         artists: 'Jacinto Design - 3',
//     },
//     {  images : 'metric-1',
//         songName : 'metric-1',
//         titles :   'Front Row (Remix)',
//         artists: 'Jacinto Design - 4',
//     }
    
    
//     ]


// function loadSong(songs){
// title.textContent = songs.titles
// artist.textContent = songs.artists
// audios.src = `music/${songs.songName}.mp3`
// images.src = `img/${songs.images}.jpg`

// }

// loadSong(songs[songIndex])



// nextBtn.addEventListener('click', ()=> nextSong())

// function nextSong(){
//     songIndex++
//     if(songIndex >= songs.length){
//         songIndex = 0
//     }
//     loadSong(songs[songIndex])
//     playSong()
// }

// prevBtn.addEventListener('click', ()=> prevSong())


// function prevSong(){
//     console.log('yes');
// songIndex--
// if(songIndex < 0){
// songIndex = songs.length - 1
// }
// loadSong(songs[songIndex])
// playSong()
// }


// audios.addEventListener('ended', ()=> playSong() )
// audios.addEventListener('timeupdate', (e)=> updating(e) )


// function updating(e){
// let songDuration = e.srcElement.duration
// let songCurrentTime = e.srcElement.currentTime

// let songPercentage = (songCurrentTime / songDuration) * 100
// progress.style.width = `${songPercentage}%`


// let durationIntoMinutes = Math.floor(songDuration / 60)
// let durationIntoSeconds = Math.floor(songDuration % 60) 

    
// if (durationIntoSeconds < 10) {
//     durationIntoSeconds = `0${durationIntoSeconds}`;
//   }

// if(durationIntoSeconds){
// duration.textContent = `${durationIntoMinutes}: ${durationIntoSeconds}`
// }

// let SCTintoMintes = Math.floor(songCurrentTime / 60)
// let SCTintoSeconds = Math.floor(songCurrentTime % 60)

// if(SCTintoSeconds < 10){
// currentTime.textContent = `0${SCTintoSeconds}`
// }

// currentTime.textContent = `${SCTintoMintes}:${SCTintoSeconds}`;

// }


// progressConatiner.addEventListener('click', (e)=> setprogress(e))


// function setprogress(e){
// let width = e.target.clientWidth
// const clickX = e.offsetX;
// console.log(clickX);
// const { duration } = audios;
// audios.currentTime = (clickX / width) * duration;

// }





