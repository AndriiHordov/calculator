import parser from "./parser.js";
import { calculator } from "./calculator.js";

export function calculatorEngine(input) {
  const queue = parser(input);
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
