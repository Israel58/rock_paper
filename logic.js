// create func that creates number 0 -1 
// store num in varable 
// if varable % .3 == zero , return "rock"
// if varable % .2 == zero , return "paper"
// if varable % .4 == zero , return "scissors"

function getRandomNumber() { 
    let randomNumber = Math.floor( Math.random() * 10 ) ; 
    return randomNumber; 
}

function getComputerChoice (num){

if (num % 3 == 0) {
    return "rock";
} 

else if (num % 2 == 0) {
    return "scissors";
}
else {
    return "paper";
}
}

console.log(getComputerChoice (getRandomNumber()))


