import { dynamicCalculation, } from "./config.js";
import { Prompts } from "./Prompt.js";
let pr = await new Prompts("calculator", "string", "Choose:\n1. Addition.\n2. Substract.\n3. Multiplication: ").showPrompt();
if (pr === "1") {
    // addition();
    dynamicCalculation("-");
}
else if (pr === "2") {
    // substract();
    dynamicCalculation("-");
}
else if (pr === "3") {
    // multiplication();
    dynamicCalculation("*");
}
