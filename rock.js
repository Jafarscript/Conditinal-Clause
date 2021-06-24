let getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error Message');
    }
}

let getComputerChoice = randomNumber => {
    randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    };
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'You won';
        } else {
            return 'The Computer Won';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You won';
        } else {
            return 'The Computer won';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'You won';
        } else {
            return 'The Computer won';
        }
    }
    if(userChoice === 'bomb'){
        return "You won";
    }
}

const playGame = () => {
    const userChoice = getUserChoice('bomb')
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();