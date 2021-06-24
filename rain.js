const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3)
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };

  const getTrainingDays = events => {
    events = getRandEvent();
    let days = '';
    if (events === 'Marathon') {
        days = '500 days';
    } else if (events === 'Triathlon') {
        days = '300 days';
    } else if (events === 'Pentathlon') {
        days = '210 days';
    }
    return days;
}
console.log(getTrainingDays());


const name = 'Jafar';
const events = getRandEvent();
const day = getTrainingDays();

const logEvent = (name, events) => {
    console.log(name + '`s event is ' + events);
}
const logTime = (name, day) => {
    console.log(name + '`s time to train is ' + day);
}

logEvent(name, events);
logTime(name, day);