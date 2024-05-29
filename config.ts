import { Prompts } from "./Prompt.js";

export const dynamicCalculation = async (operator: string) => {
  let arr = [];
  console.log("*****");
  let num: string | number = 1;
  let input: string | number = 0;
  while (input !== "s") {
    input = await new Prompts(
      num.toString(),
      "string",
      "Enter your " + num + ": "
    ).showPrompt();
    if (input === "s") {
      console.log("ar", arr);
      console.log(
        arr
          .slice(0, arr.length)
          .reverse()
          .reduce((a, b) => {
            a = Number(a);
            b = Number(b);
            switch (operator) {
              case "+":
                return a + b;
              case "-":
                return a - b;
              case "*":
                return a * b;
              case "/":
                return a / b;
              default:
                throw new Error("Unsupported operator");
            }
          }, 1)
      );
    }
    arr.push(input);
    num++;
  }
};
