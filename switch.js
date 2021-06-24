let examGrade = 101;
let examScore = Math.floor(Math.random() * examGrade);
if(examScore <= 100 && examScore >=75){
    console.log('You score garde A');
}
else if(examScore <= 74 && examScore >= 65){
    console.log('You score grade B');
}
else if(examScore <= 64 && examScore >= 55){
    console.log('You score grade C');
}
else if(examScore <= 54 && examScore >= 45){
    console.log('You score grade D');
}
else if(examScore <= 44 && examScore >= 35){
    console.log('You score garde E');
}
else if(examScore <= 34 && examScore >= 25){
    console.log('You score garde F');
}
else{
    console.log('You score zero');
}
console.log(examScore);

