class Anagrama{
constructor(){
    this.check()
}

check(){
    document.querySelector(".btn").addEventListener("click", () => {
        let inp1 = document.querySelector(".input1").value.trim()
        let inp2 = document.querySelector(".input2").value.trim()
        document.querySelector(".res").innerHTML = inp1.split("").sort().join("") === inp2.split("").sort().join("") ? true : false
        })
}
}

const anagrama = new Anagrama()
