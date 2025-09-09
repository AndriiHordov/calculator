const parseOperand = (str) =>  (str.includes('.') ? parseFloat : parseInt)(str);

const sameTypeArgs = (type, args) => args.every((arg) => typeof arg === type);

export { parseOperand, sameTypeArgs };
