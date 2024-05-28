import inquirer from "inquirer";
import chalk from "chalk";

const inq = async () => {
  let answer = await inquirer.prompt([
    { name: "name", type: "string", message: "Choose: \n1. +\n2. -\n" },
  ]);
  if (answer.name === "1") {
    let calculate1 = await inquirer.prompt([
      { name: "first", type: "number", message: "Enter your first number:" },
    ]);
    let calculate2 = await inquirer.prompt([
      { name: "second", type: "number", message: "Enter your second number:" },
    ]);
    console.log(chalk.red(calculate1.first + calculate2.second));
  }
};
inq();
