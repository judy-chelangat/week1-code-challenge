//Challenge 3: Net Salary Calculator (Toy Problem)
//Write a program whose major task is to calculate an individual’s Net Salary 
//by getting the inputs of basic salary and benefits
const prompt = require("prompt-sync")();
const basicSalary = prompt("enter your basic salary:")
const benefits=prompt("enter your benefits:")

 
//Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

// gross salary calculation
const grossSalary=parseInt(basicSalary) + parseInt(benefits) // calculating the gross salary 
function calculateGrossSalary() {

   //console.log(`Your basic  salary is : ${basicSalary}`)
   console.log(`Your gross salary is: ${grossSalary} `)

}
calculateGrossSalary()


//NHIFDeductions 	calculations 
function NHIFDeductions(){
    if(grossSalary>=0 && grossSalary<=5999){
        console.log(`your nhif deduction is: ${150}`)
    }
    else if(grossSalary>=6000 && grossSalary<=7999){
        console.log(`your nhif deduction is: ${300}`)
    }
    else if(grossSalary>=8000 && grossSalary<=11999){
        console.log(`your nhif deduction is: ${400}`)
    }
    else if(grossSalary>=12000 && grossSalary<=14999){
        console.log(`your nhif deduction is: ${500}`)
    }
    else if(grossSalary>=15000 && grossSalary<=19999){
        console.log(`your nhif deduction is: ${600}`)
    }
    else if(grossSalary>=20000 && grossSalary<=24999){
        console.log(`your nhif deduction is: ${750}`)
    }
    else if(grossSalary>=25000 && grossSalary<=29999){
        console.log(`your nhif deduction is: ${850}`)
    }
    else if(grossSalary>=30000 && grossSalary<=34999){
        console.log(`your nhif deduction is: ${900}`)
    }
    else if(grossSalary>=35000 && grossSalary<=39999){
        console.log(`your nhif deduction is: ${950}`)
    }
    else if(grossSalary>=40000 && grossSalary<=44999){
        console.log(`your nhif deduction is: ${1000}`)
    }
    else if(grossSalary>=45000 &&grossSalary<=49999){
        console.log(`your nhif deduction is: ${1100}`)
    }
    else if(grossSalary>=50000 && grossSalary<=59999){
        console.log(`your nhif deduction is: ${1200}`)
    }
    else if(grossSalary>=60000 && grossSalary<=69999){
        console.log(`your nhif deduction is: ${1300}`)
    }
    else if(grossSalary>=70000 && grossSalary<=79999){
        console.log(`your nhif deduction is: ${1400}`)
    }
    else if(grossSalary>=80000 && grossSalary<=89999){
        console.log(`your nhif deduction is: ${1500}`)
    }
    else if(grossSalary>=90000 && grossSalary<=99999){
        console.log(`your nhif deduction is: ${1600}`)
    }
    else if(grossSalary>=100000){
        console.log(`your nhif deduction is: ${1700}`)
    }

}
NHIFDeductions()  // calling the function

//calculation of payee
     
     function payee()
     {
       let payee1=0
        if (grossSalary>=0 && grossSalary <= 24000)
     {
         payee1 = (0.1*grossSalary)
       console.log(`your payee is: ${payee1}`)
    }
    else if (grossSalary >=24001 && grossSalary <=32333) 
    {
        payee1=((grossSalary) * 0.25)
       console.log(`your payee is: ${payee1}`)
    }
    else if (grossSalary > 32333)
    {
        payee1 = ((grossSalary) * 0.3)
       console.log(`your payee is: ${payee1}`)
    }
     }
    payee() // calling the function payee

    // calculation of NSSF 

    function nssf1()
    {
        let nssf =0
     if (grossSalary <= 6000)
     {
        nssf = 0.06*grossSalary
        console.log (`your nssf is: ${nssf}`)
     }
     else if (grossSalary >=60001 && grossSalary<=18000) {
        nssf = (grossSalary * 0.06)
        console.log(`your nssf is: ${nssf}`)
     }
     else {
        console.log('invalid')
     }
    }
    nssf1()

    // net pay
    
    netSalary = grossSalary- (NHIFDeductions - nssf1 - payee)
    console.log(`Your net salary is : ${netSalary}`);
    
