let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegister = false;
const age = 10;
if(earlyRegister && age > 18){
    raceNumber += 1000;
}
if(age > 18 && earlyRegister){
    console.log("Early adults run at 9:30 am.");
}else if(age > 18 && !(earlyRegister)){
    console.log("Late adults run at 11:30 am.");
}else if(age < 18){
    console.log("Youth registrants run at 12:30 pm (regardless of registration)");
}else{
    console.log("Runners who are 18 years old should see the registration desk (regardless of registration).");
}