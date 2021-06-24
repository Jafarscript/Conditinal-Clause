const userName = "Jafar";
userName ? console.log("Hello, " + userName) : console.log("Hello!");;

const userQuestion = "Will I become a werewolf tonight?";
userName ? console.log(userName + " asked: " + userQuestion) : console.log("The user asked: " + userQuestion);;

let randomNumber = Math.floor(Math.random() * 8);

let eightballs = "";

switch (randomNumber) {
    case (randomNumber = 0):
        eightballs = 'It is certain';
        break;
    case (randomNumber = 1):
        eightballs = 'It is decidedly so';
        break;
    case (randomNumber = 2):
        eightballs = 'Reply hazy try again';
        break;
    case (randomNumber = 3):
        eightballs = 'Cannot predict now';
        break;
    case (randomNumber = 4):
        eightballs = 'Do not count on it';
        break;
    case (randomNumber = 5):
        eightballs = 'My sources say no';
        break;
    case (randomNumber = 6):
        eightballs = 'Outlook not so good';
        break;
    default:
        eightballs = 'Signs point to yes';
        break;
}

console.log('The eight balls answered: ' + eightballs);