let examGrade = 101;
let examScore = Math.floor(Math.random() * examGrade);
switch(examScore){
    case (examScore<= 100 && examScore>= 75):
        console.log('You score garde A');
        break;
    case (examScore<= 74 && examScore>= 65):
        console.log('You score garde B');
        break;
    case (examScore<= 64 && examScore>= 55):
        console.log('You score garde C');
        break;
    case (examScore<= 54 && examScore>= 45):
        console.log('You score garde D');
        break;
    case (examScore<= 44 && examScore>= 35):
        console.log('You score garde E');
        break;
    case (examScore<= 34 && examScore>= 25):
        console.log('You score garde F');
        break;
    default:
        console.log('You score zero');
        break;
}
console.log(examScore);