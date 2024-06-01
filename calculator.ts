import { dynamicCalculation } from "./config.js";
import { Prompts } from "./Prompt.js";

let pr = await new Prompts(
  "calculator",
  "string",
  "Choose:\n1. Addition.\n2. Substract.\n3. Multiplication\n4. Division\n5. Module: "
).showPrompt();
if (pr === "1") {
  dynamicCalculation("+");
} else if (pr === "2") {
  dynamicCalculation("-");
} else if (pr === "3") {
  dynamicCalculation("*");
} else if (pr === "4") {
  dynamicCalculation("/", false);
} else if (pr === "5") {
  dynamicCalculation("%");
}
