//Challenge 3: Net Salary Calculator (Toy Problem)
//Write a program whose major task is to calculate an individual’s Net Salary 
//by getting the inputs of basic salary and benefits
const basicSalary = prompt("enter your basic salary ")
const benefits= prompt("enter your benefits:")

//Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

// gross salary 
function calculateGrossSalary() {
  const   grossSalary = basicSalary + benefits
 alert(`Your gross salary is : ${grossSalary}`)
}
calculateGrossSalary()
//NHIFDeductions 	 
function NHIFDeductions(basicSalary){
    if(basicSalary<=5999){
        alert(`your nhif deduction is: ${150}`)
    }
    else if(basicSalary>=6000 && basicSalary<=7999){
        alert(`your nhif deduction is: ${300}`)
    }
    else if(basicSalary>=8000 && basicSalary<=11999){
        alert(`your nhif deduction is: ${400}`)
    }
    else if(basicSalary>=12000 && basicSalary<=14999){
        alert(`your nhif deduction is: ${500}`)
    }
    else if(basicSalary>=15000 && basicSalary<=19999){
        alert(`your nhif deduction is: ${600}`)
    }
    else if(basicSalary>=20000 && basicSalary<=24999){
        alert(`your nhif deduction is: ${750}`)
    }
    else if(basicSalary>=25000 && basicSalary<=29999){
        alert(`your nhif deduction is: ${850}`)
    }
    else if(basicSalary>=30000 && basicSalary<=34999){
        alert(`your nhif deduction is: ${900}`)
    }
    else if(basicSalary>=35000 && basicSalary<=39999){
        alert(`your nhif deduction is: ${950}`)
    }
    else if(basicSalary>=40000 && basicSalary<=44999){
        alert(`your nhif deduction is: ${1000}`)
    }
    else if(basicSalary>=45000 && basicSalary<=49999){
        alert(`your nhif deduction is: ${1100}`)
    }
    else if(basicSalary>=50000 && basicSalary<=59999){
        alert(`your nhif deduction is: ${1200}`)
    }
    else if(basicSalary>=60000 && basicSalary<=69999){
        alert(`your nhif deduction is: ${1300}`)
    }
    else if(basicSalary>=70000 && basicSalary<=79999){
        alert(`your nhif deduction is: ${1400}`)
    }
    else if(basicSalary>=80000 && basicSalary<=89999){
        alert(`your nhif deduction is: ${1500}`)
    }
    else if(basicSalary>=90000 && basicSalary<=99999){
        alert(`your nhif deduction is: ${1600}`)
    }
    else if(basicSalary>=100000){
        alert(`your nhif deduction is: ${1700}`)
    }

}
NHIFDeductions(basicSalary)