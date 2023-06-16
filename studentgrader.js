//challenge 1 solution Student Grade Generator (Toy Problem)
//Write that prompts the user to input student marks.
const prompt = require("prompt-sync")();
const studentMarks =prompt("Input students marks:")

//The input should be between 0 and 100.
if(studentMarks<0 || studentMarks>100){
    console.log("please enter a value between 0 and 100");
}
//Then output the correct grade: 
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
function studentmark(){
if(studentMarks>79 && studentMarks<=100){
    console.log("Your grade is A");
}
else if(studentMarks>=60 && studentMarks<=79){
    console.log("Your grade is B")
}
if(studentMarks>=49 && studentMarks<=59){
    console.log("Your grade is C")
}
if(studentMarks>=40 && studentMarks<49){
    console.log("Your grade is D")
}
if(studentMarks<40){
    console.log("Your grade is E")
}
}
studentmark()