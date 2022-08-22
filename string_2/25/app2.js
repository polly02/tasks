// 25. На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4 Г – 2 Ц – 3 Т – 5

const str = "АааГГЦЦцТТтттА".toUpperCase();
let countA = 0;
let countG = 0;
let countC = 0;
let countT = 0;
for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
        case 'А':
            countA++;
            break;
        case 'Г':
            countG++;
            break;
        case 'Ц':
            countC++;
            break;
        case 'Т':
            countT++;
            break;
    }
}
console.log(`А - ${countA} Г - ${countG} Ц - ${countC} Т - ${countT}`);