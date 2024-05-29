#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = (Math.floor(10000 + Math.random() * 90000));
let myBalance = 0;
console.log(chalk.blue("*** Welcome to Student Management System ***"));
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: (chalk.green("Enter student name:")),
        validiate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return (chalk.red("Please enter a non-empty value"));
        },
    },
    {
        name: "courses",
        type: "list",
        message: (chalk.yellow("Select the course to be enrolled!")),
        choices: ["HTML", "Javascript", "Typescript", "Python"]
    }
]);
const tuitionFee = {
    "HTML": 2000,
    "Javascript": 5000,
    "Typescript": 8000,
    "Python": 4000,
};
console.log(chalk.green(`\n Tuition Fees : ${tuitionFee[answer.courses]}\n`));
console.log(chalk.green(`Balance: ${myBalance}\n`));
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: (chalk.green("Select payment method:")),
        choices: ["EasyPaisa", "Bank transfer", " Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: (chalk.green("Transfer money:")),
        validiate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return (chalk.red("Please enter a non-empty value!"));
        },
    }
]);
console.log(chalk.yellow(`\n YOU SELECTED PAYMENT METHOD ${paymentType.payment}`));
const tuitionFees = tuitionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tuitionFees === paymentAmount) {
    console.log(chalk.green(`\n You have succesfully enrolled in ${answer.courses}`));
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: (chalk.green("What would you like to do next?")),
            choices: ["view status", "Exit?"]
        }
    ]);
    if (ans.select === "view status") {
        console.log(chalk.blueBright("*** STATUS***"));
        console.log(chalk.yellow(`Student Name: ${answer.students}`));
        console.log(chalk.yellow(`Student ID: ${randomNumber}`));
        console.log(chalk.yellow(`Course selected: ${answer.courses}`));
        console.log(chalk.yellow(`Fees paid: ${paymentAmount}`));
        console.log(chalk.yellow(` Balance: ${myBalance += paymentAmount}`));
    }
    else {
        console.log(chalk.red("\n Exiting Student Mangement System\n"));
    }
}
else {
    console.log(chalk.red(" INVALID AMOUNT!"));
}
;
