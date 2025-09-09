import parser from "./parser.js";
import { operatorDescriptors } from "../../data/operators.js";
import { calculator } from "./calculator.js";

const { binaryOperators } = operatorDescriptors
export function calculatorEngine(input) {
  const queue = parser(input);
  console.log(queue)
  const stack = [];
  for(let i = 0; i < queue.length; i++) {
    if(/[0-9]+/.test(queue[i])) {
      stack.push(queue[i]);
    } else if(binaryOperators[queue[i]]) {
      const right = stack.pop();
      const left = stack.pop();
      stack.push(calculator({
        args: [left, right],
        operator: queue[i],
      }));
    } else {
      const right = stack.pop();
      stack.push(calculator({
        args: [right],
        operator: queue[i],
      }));
    }
  }
  return stack[0];
}
