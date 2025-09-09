import { operatorDescriptors } from "../../data/operators.js";
import { sameTypeArgs } from "./utils.js";

const { binaryOperators, unaryOperators } = operatorDescriptors;

export function calculator(operationDescriptor) {
  const { args, operator } = operationDescriptor;
  
  return sameTypeArgs('number', args) && args.length > 1 
    ? binaryOperators[operator](...args) 
    : unaryOperators[operator](...args);
}