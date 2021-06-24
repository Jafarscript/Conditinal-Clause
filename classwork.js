/**
 * The const is use to declare a variable for human age
 * myAge represent my age that will be converted to dog's age
 */
const myAge = 18;
// earlyYear represent 
let earlyYear = 2;
// the earlyYear is now modified by multiplication assignment
earlyYear *= 10.5;
// this the value after the first two are already accounted so we subtract 2 years with (*) subtraction assignment from the intial age (myAge)
let laterYear = myAge - 2;
/**
 * my later years is multiply by 4 to calculate the number of dogs year accounted for my later year
 * laterYear is multiply with (*) multiplication assignment
 * laterYear is now modifies as (laterYear = laterYear * 4)
 */
laterYear *= 4;
// The mmyAgeInDogYears value is the concatenate of earlyYear and laterYear using the (+) addition assignment
let myAgeInDogYears = earlyYear + laterYear;
//  The value of myName is turn to lowercase with Js built-in methods with adding (.toLowerCase()) to the end the value or string
let myName = "Jafar".toLowerCase();
// This code display the results with concatenating some texts and strings with (+) addition assignment
// console.log("My name is " + myName + ". I am "+ myAgeInDogYears + " years old in dog years");
if (true) {
    console.log("The code in this block will not run");
} else {
    console.log("But the code in this block will");
}
// == is use to compare two varaibles without considering the data type while === compare two variables with the
// consideration of both data types. 