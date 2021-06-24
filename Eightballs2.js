const userName = "";
userName ? console.log("Hello, " + userName) : console.log("Hello!");;

const userQuestion = "Will I become a werewolf tonight?";
userName ? console.log(userName + " asked: " + userQuestion) : console.log("The user asked: " + userQuestion);;

let randomNumber = Math.floor(Math.random() * 8);

let eightballs = "";

if (randomNumber = 0) {
    eightballs = 'It is certain';
} else if (randomNumber = 1) {
    eightballs = 'It is decidedly so';
} else if (randomNumber = 2) {
    eightballs = 'Reply hazy try again';
} else if (randomNumber = 3) {
    eightballs = 'Cannot predict now';
} else if (randomNumber = 4) {
    eightballs = 'Do not count on it';
} else if (randomNumber = 5) {
    eightballs = 'My sources say no';
} else if (randomNumber = 6) {
    eightballs = 'Outlook not so good';
} else {
    eightballs = 'Signs point to yes';
}

console.log('The eight balls answered: ' + eightballs);