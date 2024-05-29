import { Prompts } from "./Prompt.js";
export const dynamicCalculation = async (operator, reverse = true) => {
    let arr = [];
    console.log("*****");
    let num = 1;
    let input = 0;
    while (input !== "s") {
        input = await new Prompts(num.toString(), "string", "Enter your " + num + ": ").showPrompt();
        if (input === "s") {
            console.log("ar", arr);
            let decidedArr = reverse
                ? arr.slice(0, arr.length).reverse()
                : arr.slice(0, arr.length);
            console.log("decidedArr", decidedArr);
            // operator === "/" && arr.unshift(0);
            console.log(decidedArr.reduce((a, b) => {
                a = Number(a);
                b = Number(b);
                switch (operator) {
                    case "+":
                        return b + a;
                    case "-":
                        return b - a;
                    case "*":
                        return b * a;
                    case "/":
                        // console.log("///", a);
                        // return b / (a * b);
                        return a / (b * b);
                    default:
                        throw new Error("Unsupported operator");
                }
            }, operator === "*" ? 1 : operator === "/" ? 1 : 0));
        }
        arr.push(input);
        num++;
    }
};
