//Challenge 2: Speed Detector (Toy Problem)
//Write a program that takes as input the speed of a car e.g 80.
const speedOfCar=prompt("please input the speed of car:")

//If the speed is less than 70, it should print “Ok”
//Otherwise, for every 5 km/s above the speed limit (70), 
//it should give the driver one demerit point and print the total number of demerit points.

if(speedOfCar<70){
    alert("Ok")
}
else (speedOfCar>70){
    const speedOver=(speedOfCar-70)/5
    console.log("your demirit points is:" speedOver)
}