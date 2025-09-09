import { operatorDescriptors } from "../../data/operators.js";
import { sameTypeArgs, safeOperation } from "./utils.js";

const { binaryOperators, unaryOperators } = operatorDescriptors;

export function calculator(operationDescriptor) {
  const { args, operator } = operationDescriptor;
  
  return sameTypeArgs('number', args) && args.length > 1 
    ? safeOperation(operator, binaryOperators, ...args) 
    : safeOperation(operator, unaryOperators, ...args) ;
}