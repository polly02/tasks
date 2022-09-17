let number = Math.round(Math.random() * 100);

for (; ;) {
    let query = prompt("Do you want to play game? (yes/no, +/-)");
    if (query === "no" || query === "-") {
        break
    } else if (query === "yes" || query === "+") {
        guessTheNumber(number)
    }
}

function guessTheNumber(num) {
    let input = +prompt("Guess the number from 0 to 100");
    if (input < 100 || input > 0 || !isNaN(input)) {
        if (input === num) {
             alert("You guessed it, congratulations!");
             return num
        } else if (input < num) {
            alert("Too little, try again");
            return guessTheNumber(num)
        } else if (input > num) {
            alert("Too much, try again");
            return guessTheNumber(num)
        }
    } else {
        alert("Repeat input")
        return guessTheNumber(num) 
    }
}
