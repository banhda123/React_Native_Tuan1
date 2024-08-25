// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 


function calculateBMI(mass, height){
    return mass/(height*height);
}

const Mark= {name: "Mark", mass: 85, height:1.75}
const John= {name: "John", mass: 72, height: 1.80}

const BMI1= calculateBMI(Mark.mass, Mark.height);
const BMI2= calculateBMI(John.mass, John.height);

if (BMI1> BMI2){
    console.log("chi so bmi cua Mark cao hon John");
}else if(BMI1<BMI2){
    console.log("chi so bmi cua Mark nho hon John");
}else{
    console.log("chi so bmi ca 2 nguoi bang nhau");
}