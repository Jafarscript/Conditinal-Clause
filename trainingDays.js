let getRandEvent = () => {
    const random = Math.floor(Math.random() * 5);
    switch (random) {
        case 0:
            return 'Marathon';
        case 1:
            return 'high jump';
        case 2:
            return 'marathons';
        case 3:
            return '100m race';
        case 4:
            return '400m race';
    }
}

const getTrainingDays = events => {
    let days = ' ';
    if (events === 'Marathon') {
        days = '500 days';
    } else if (events === 'high jump') {
        days = '300 days';
    } else if (events === 'marathons') {
        days = '210 days';
    } else if (events === '100m race') {
        days = '150 days';
    } else if (events === '400m race') {
        days = '200 days';
    }
    return days;
}

const logEvent = (name, event) => {
    console.log(name + '`s event is ' + event);
}
const logTime = (name, day) => {
    console.log(name + '`s time to train is ' + day);
}
const name = 'Nala';
const event = getRandEvent();
const day = getTrainingDays();

logEvent(name, event);
logTime(name, days);