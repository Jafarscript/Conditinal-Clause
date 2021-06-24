let climateChange = [0,27,40,60,70,100]
let randomValue = climateChange[Math.floor(Math.random() * climateChange.length)];
if (randomValue < 60) {
    console.log('The weather is cool');
} else if(randomValue <= 27) {
    console.log("It is winter");
} else if(randomValue = 40) {
    console.log("It is fall! Leaves are falling");
} else if(randomValue >= 70) {
    console.log("It is sunny and warm because it is summer");
} else{
    console.log("The weather change is not detected");
};
console.log(randomValue);