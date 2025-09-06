import { operatorDescriptors } from "../../data/operators.js";
import { sameTypeArgs, parseOperand } from "./utils.js";

const { operatorsPrecedence, binaryOperators, unaryOperators, aliases } = operatorDescriptors;

function calculate(operationDescriptor) {
  const {
    first, 
    second, 
    op
  } = operationDescriptor;
  
  return sameTypeArgs('number', first, second) 
    ? binaryOperators[op](first, second) 
    : unaryOperators[op](second);
}
const parser = (string) => {
  const stack = [];
  const queue = [];
  const tokens = [];
  let len;
  let count = 0;
  const cleanString = string.replace(/\s/g,'');
  const rawTokens = cleanString
    .replace(/[+-x/()√]/g, (c) => aliases[c] ?? c)
    .replace(/^sub@@|(?<=add@@|sub@@|mul@@|div@@)sub@@(\d+)/g,'neg@@ $1')
    .match(/(\d+[.]?\d?)+?|[a-zA-Z@]{5}/g)
    .map((token, i, arr) => /[a-z]/g.test(arr[i-1]) && token === 'sub@@' ? 'neg@@' : token)
    .map((token) => token.replace(/[@]/g, ''));
  len = rawTokens.length;
  for(let i = 0; i < len; i++) {
    if(rawTokens[i] === 'neg') {
      while(rawTokens[i] === 'neg') {
      count++;
      i++;
    }
    if(count % 2) tokens.push('neg');
    count = 0;
    i--;
  } else {
    tokens.push(rawTokens[i]);
  }
}

len = tokens.length;
  for(let i = 0; i < len; i++) {
    if(/[0-9.]/.test(tokens[i])) {
      queue.push(parseOperand(tokens[i]));
    } else if(tokens[i] === 'oPars') {
      stack.push(tokens[i]);
    } else if(tokens[i] === 'cPars') {
      while(stack.at(-1) !== 'oPars') queue.push(stack.pop());
      stack.pop();
    } else {
      const operator = tokens[i];
      while(stack.length && operatorsPrecedence[operator] <= operatorsPrecedence[stack.at(-1)]) {
        queue.push(stack.pop());
      }
      stack.push(operator);
    }
  }
  while(stack.length) queue.push(stack.pop());
  return queue;
}

function calculator(input) {
  const queue = parser(input);
  const stack = [];
  for(let i = 0; i < queue.length; i++) {
    if(/[0-9]+/.test(queue[i])) {
      stack.push(queue[i]);
    } else if(binaryOperators[queue[i]]) {
      stack.push(calculate({
        second: stack.pop(),
        op: queue[i],
        first: stack.pop(),
      }));
    } else {
      stack.push(calculate({
        second: stack.pop(),
        op: queue[i],
      }));
    }
  }
  return stack[0];
}

export default calculator;
