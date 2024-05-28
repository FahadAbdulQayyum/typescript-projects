import { Prompts } from "./Prompt.js";
export const addition = async () => {
    let arr = [];
    console.log("*****");
    let num = 1;
    let input = 0;
    //   while (num.toString() !== "f") {
    //   while (num.toString() !== "f") {
    while (input !== "f") {
        //   while (typeof num === "string" && num === "f") {
        input = await new Prompts(num.toString(), "string", "Enter your " + num + ": ").showPrompt();
        if (input === "f") {
            // if (typeof num === "string" && num === "f") {
            console.log("FFF", arr.slice(0, arr.length).reduce((a, b) => +b + +a, 0));
        }
        arr.push(input);
        num++;
    }
    console.log("arr:::", arr);
};
