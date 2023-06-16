//challenge 1 solution Student Grade Generator (Toy Problem)
//Write that prompts the user to input student marks.
const studentMarks =prompt("Input students marks:")

//The input should be between 0 and 100.
if(studentMarks<0 || studentMarks>100){
    alert("please enter a value between 0 and 100")
}
//Then output the correct grade: 
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
if(studentMarks>79 && studentMarks<=100){
    alert("Your grade is A")
}
else if(studentMarks>=60 && studentMarks<=79){
    alert("Your grade is B")
}
if(studentMarks>=49 && studentMarks<=59){
    alert("Your grade is C")
}
if(studentMarks>=40 && studentMarks<49){
    alert("Your grade is D")
}
if(studentMarks<40){
    alert("Your grade is E")
}