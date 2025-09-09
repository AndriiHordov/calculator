import parser from "./parser.js";
import { operatorDescriptors } from "../../data/operators.js";
import { calculator } from "./calculator.js";

const { binaryOperators } = operatorDescriptors
export function calculatorEngine(input) {
  const queue = parser(input);
  const stack = [];
  for(let i = 0; i < queue.length; i++) {
    if(/[0-9]+/.test(queue[i])) {
      stack.push(queue[i]);
    } else {
      let left, right = stack.pop();
      if(binaryOperators[queue[i]]) {
      left = stack.pop();
    }
    stack.push(calculator({
        args: left && right ? [left, right] : [right],
        operator: queue[i],
      }));
    }
  }
  return stack[0];
}
