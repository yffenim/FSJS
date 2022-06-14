// 9.1 Body mass index

// Create the code of this exercise in file bmiCalculator.ts.

// Write a function calculateBmi that calculates a BMI based on a given height (in centimeters) and weight (in kilograms) and then returns a message that suits the results.

// Call the function in the same file with hard-coded parameters and print out the result. The code

// console.log(calculateBmi(180, 74))

// should print the following message:

// Normal (healthy weight)


// given height in cm and weight in kg 
// bmi = weight(kg) / height(m)**2
// does not need a return
const calculateBmi = (height: number, weight: number) => {
	// convert to units needed for calculation
	let h = (height / 100) ** 2;
	let bmi = weight / h;
	let msg = "";

	switch(true) {
		case (bmi < 18.5):
		msg = "Underweight";
		break;
		case (bmi > 18.4 && bmi < 25):
		msg = "Normal (healthy weight)";
		break;
		case (bmi > 24.9 && bmi < 40):
		msg = "Overweight";
		break;
		case (bmi > 39.9) :
		msg = "Obese";
		break;
		default:
			throw new Error("Error with BMI");
	};
	console.log(msg);
}

let height = 185; 
let weight = 100;
// let height = 1.72;
// let weight = 68;
calculateBmi(height,weight);









// for getting user prompt
// const readline = require("readline");
// const read = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// let test = null;
// // type Result = string;


// const calculateBmi = 
// 	(weight: number, height: number, sex: string, msg: string) => {

// read.question("What is your weight?", function(weight) {
// 	test = weight;
// 	read.question("What is your height?", function(height) {
// 		read.question("What is your biological sex?", function(sex) {
// 			console.log(`${weight}, ${height}, ${sex}`);
// 			read.close();
// 		});
	// });
// });



// };



// define specific type for outputt 
// type Result = number;

// export const calculateBmi = 
// 	(a: number, b: number, sex: string, msg: string): Result => {
	
// };
