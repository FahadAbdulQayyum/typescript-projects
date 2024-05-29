import { Prompts } from "./Prompt.js";

export const addition = async () => {
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
      console.log(arr.slice(0, arr.length).reduce((a, b) => +b + +a, 0));
    }
    arr.push(input);
    num++;
  }
};

export const substract = async () => {
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
          .reduce((a, b) => Number(b) - Number(a), 0)
      );
    }
    arr.push(input);
    num++;
  }
};
