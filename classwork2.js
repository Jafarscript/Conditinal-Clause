let hungerLevel = 7;
const foodReady = true;
// if (hungerLevel > 7 && foodReady) {
//     console.log('Time to eat!');
// } else {
//     console.log('We can eat later!');
// }
(hungerLevel = 7)
    ?
    console.log('Time to eat!')
    :
    console.log('We can eat later!');
// if (hungerLevel <= 7) {
//     console.log('Time to eat!');
// } else {
//     console.log('We can eat later!');
// }

// if (hungerLevel >= 7) {
//     console.log('Time to eat!');
// } else {
//     console.log('We can eat later!');
// }

// if (hungerLevel < 7) {
//     console.log('Time to eat!');
// } else {
//     console.log('We can eat later!');
// }