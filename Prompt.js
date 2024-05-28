import inquirer from "inquirer";
import chalk from "chalk";
export class Prompts {
    constructor(name, type, message) {
        this.showPrompt = async () => {
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
        this.name = name;
        this.type = type;
        this.message = message;
    }
}
