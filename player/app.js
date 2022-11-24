const play = document.querySelector(".play")
const audio = document.createElement("audio")
let flag = false


const arr = [
    {
        src: "./1.mp3"
    },
    {
        src: "./2.mp3"
    },
    {
        src: "./3.mp3"
    }
]

let indexCurrentSong = 0

play.addEventListener("click", () => {
    currentSong()
})

document.querySelector(".right").addEventListener("click", () => {
    if (indexCurrentSong === arr.length - 1) {
        indexCurrentSong = 0
    } else {
        indexCurrentSong++
    }
    changeSong()

})

document.querySelector(".left").addEventListener("click", () => {
    if (indexCurrentSong === 0) {
        indexCurrentSong = arr.length - 1
    } else {
        indexCurrentSong--
    }
    changeSong()

})

function changeSong() {
    audio.src = arr[indexCurrentSong].src
    audio.play()
}

function currentSong() {
    audio.src = arr[indexCurrentSong].src
    if (flag === false) {
        audio.play()
        play.textContent = "выключить"
        flag = true
    } else {
        audio.pause()
        play.textContent = "включить"
        flag = false
    }
}