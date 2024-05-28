import inquirer from "inquirer";
import chalk from "chalk";

export class Prompts {
  name: string;
  type: string;
  message: string;

  constructor(name: string, type: string, message: string) {
    this.name = name;
    this.type = type;
    this.message = message;
  }

  showPrompt = async () => {
    console.log(chalk.bgBlueBright("|*|*|*|*|*|*|*|*|*|*|*|*|*|"));
    let answers = await inquirer.prompt([
      {
        name: this.name,
        type: this.type,
        message: this.message,
      },
    ]);
    return answers[this.name];
  };
}
