// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John


//Data1
console.log("data1");
const markMass = 86;
const johnMass = 23;

const markHeight = 1.69;
const johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

console.log("Mark's BMI:", markBMI);
console.log("John's BMI:", johnBMI);

if (markBMI > johnBMI) {
    console.log("Mark has a higher BMI than John");
} else if (johnBMI > markBMI) {
    console.log("John has a higher BMI than Mark");
} else {
    console.log("Mark and John have the same BMI");
}


//Data2
console.log("data2");
const markMass1 = 95;
const johnMass1 = 85;

const markHeight1 = 1.88;
const johnHeight1 = 1.76;

const markBMI1 = markMass1 / (markHeight1 * markHeight1);
const johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);

if (markBMI1 > johnBMI1) {
    console.log("Mark has a higher BMI than John");
} else if (johnBMI1 > markBMI1) {
    console.log("John has a higher BMI than Mark");
} else {
    console.log("Mark and John have the same BMI");
}
