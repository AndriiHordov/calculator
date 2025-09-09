const parseOperand = (str) =>  (str.includes(".") ? parseFloat : parseInt)(str);

const sameTypeArgs = (type, args) => args.every((arg) => typeof arg === type);

const createRegExpBundle = (source) => new RegExp(source.reduce((regExp, match) => {
    switch(match.length) {
        case 1: {
            regExp += (regExp.length? "\|" : "") + `\\${match}`;
            break;
        }
        default: {
            regExp += `|${match}`
        }
    }
    return regExp;
},''),"ig");

const safeOperation = (op, obj, ...args) => {
  try {
    switch (op) {
      case "div":
        if (args[1] === 0) throw new Error("Cannot divide by zero");
        break;
      case "rem":
      case "mod":
        if (args[1] === 0) throw new Error("Cannot modulo by zero");
        break;
      case "sqrt":
        if (args[0] < 0) throw new Error("Square root of a negative number is not real");
        break;
      case "log":
        if (args[0] <= 0) throw new Error("Logarithm undefined for zero or negative numbers");
        break;
    }

    const result = obj[op]?.(...args);

    if (!Number.isFinite(result)) {
      throw new Error("Result out of range");
    }
    if (Number.isNaN(result)) {
      throw new Error("Invalid result");
    }

    return result;
  } catch (e) {
    return { error: e.message };
  }
}

export { parseOperand, sameTypeArgs, createRegExpBundle, safeOperation };
