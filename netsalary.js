//Challenge 3: Net Salary Calculator (Toy Problem)
//Write a program whose major task is to calculate an individual’s Net Salary 
//by getting the inputs of basic salary and benefits
const prompt = require("prompt-sync")();
const basicSalary = prompt("enter your basic salary and benefits :")


//Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

// gross salary calculation
function calculateGrossSalary() {
   console.log(`Your gross salary is : ${basicSalary}`)
}
calculateGrossSalary()


//NHIFDeductions 	calculations 
function NHIFDeductions(){
    if(basicSalary>=0 && basicSalary<=5999){
        console.log(`your nhif deduction is: ${150}`)
    }
    else if(basicSalary>=6000 && basicSalary<=7999){
        console.log(`your nhif deduction is: ${300}`)
    }
    else if(basicSalary>=8000 && basicSalary<=11999){
        console.log(`your nhif deduction is: ${400}`)
    }
    else if(basicSalary>=12000 && basicSalary<=14999){
        console.log(`your nhif deduction is: ${500}`)
    }
    else if(basicSalary>=15000 && basicSalary<=19999){
        console.log(`your nhif deduction is: ${600}`)
    }
    else if(basicSalary>=20000 && basicSalary<=24999){
        console.log(`your nhif deduction is: ${750}`)
    }
    else if(basicSalary>=25000 && basicSalary<=29999){
        console.log(`your nhif deduction is: ${850}`)
    }
    else if(basicSalary>=30000 && basicSalary<=34999){
        console.log(`your nhif deduction is: ${900}`)
    }
    else if(basicSalary>=35000 && basicSalary<=39999){
        console.log(`your nhif deduction is: ${950}`)
    }
    else if(basicSalary>=40000 && basicSalary<=44999){
        console.log(`your nhif deduction is: ${1000}`)
    }
    else if(basicSalary>=45000 && basicSalary<=49999){
        console.log(`your nhif deduction is: ${1100}`)
    }
    else if(basicSalary>=50000 && basicSalary<=59999){
        console.log(`your nhif deduction is: ${1200}`)
    }
    else if(basicSalary>=60000 && basicSalary<=69999){
        console.log(`your nhif deduction is: ${1300}`)
    }
    else if(basicSalary>=70000 && basicSalary<=79999){
        console.log(`your nhif deduction is: ${1400}`)
    }
    else if(basicSalary>=80000 && basicSalary<=89999){
        console.log(`your nhif deduction is: ${1500}`)
    }
    else if(basicSalary>=90000 && basicSalary<=99999){
        console.log(`your nhif deduction is: ${1600}`)
    }
    else if(basicSalary>=100000){
        console.log(`your nhif deduction is: ${1700}`)
    }

}
NHIFDeductions()

//calculation of payee
     
     function payee()
     {
       
        if (basicSalary>=0 && basicSalary <= 24000)
     {
       const  payee1 = (0.1*basicSalary)
       console.log(`your payee is: ${payee1}`)
    }
    else if (basicSalary >=24001 && basicSalary <=32333) 
    {
       const  payee2=((basicSalary) * 0.25)
       console.log(`your payee is: ${payee2}`)
    }
    else if (basicSalary > 32333)
    {
       const  payee3 = ((basicSalary) * 0.3)
       console.log(`your payee is: ${payee3}`)
    }
     }
    payee()

    // calculation of NSSF 

    function nssf1()
    {
        let nssf =0
     if (basicSalary <= 6000)
     {
        nssf = 0.06*basicSalary
        console.logt(`your nssf is: ${nssf}`)
     }
     else if (basicSalary >=60001 && basicSalary<=18000) {
        nssf = (basicSalary * 0.06)
        console.log(`your nssf is: ${nssf}`)
     }
     else {
        console.log('invalid')
     }
    }
    nssf1()

    // net pay
    
    netSalary = basicSalary-(NHIFDeductions + nssf1 + payee)
    console.log(`Your net salary is : ${netSalary}`);
    
