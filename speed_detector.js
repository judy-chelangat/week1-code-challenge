//Challenge 2: Speed Detector (Toy Problem)
//Write a program that takes as input the speed of a car e.g 80.
const prompt = require("prompt-sync")();
const speedOfCar =prompt("please input the speed of car:")

//If the speed is less than 70, it should print “Ok”
//Otherwise, for every 5 km/s above the speed limit (70), 
//it should give the driver one demerit point and print the total number of demerit points.

//if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, 
//the function should print: “License suspended”.


if(speedOfCar<70){
    console.log("Ok");
}
else {
   function speedOver(){    
    let demerit=(speedOfCar-70)/5
    if(demerit>12){
        console.log("License suspended");
    }
    else{
        const message =`Points: ${demerit}`
        console.log(message);
    }
   }
   speedOver()
}