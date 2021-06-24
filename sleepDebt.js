let getSleepHours = day => {
    if (day === "monday") {
        return 8;
    } else if (day === "tuesday") {
        return 7;
    } else if (day === "wednesday") {
        return 9;
    } else if (day === "thursday") {
        return 6;
    } else if (day === "friday") {
        return 9;
    } else if (day === "saturday") {
        return 7;
    } else if (day === "sunday") {
        return 10;
    }
}
// console.log(getSleepHours("friday"));
let getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
let getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

let calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed.');
    } else {
        console.log('You should get some rest.');
    }

    if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.');
    } else {
        console.log('You got the prefect hour sleep that you needed this week.');
    }
}


calculateSleepDebt();
