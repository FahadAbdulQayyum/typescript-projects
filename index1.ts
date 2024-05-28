import { addition } from "./config.js";
import { Prompts } from "./Prompt.js";

let pr = await new Prompts(
  "calculator",
  "string",
  "Choose:\n1. Addition.\n2. Substract.\n: "
).showPrompt();
if (pr === "1") {
  addition();
} else {
  console.log("|:");
}
