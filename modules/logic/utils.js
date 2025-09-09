const parseOperand = (str) =>  (str.includes('.') ? parseFloat : parseInt)(str);

const sameTypeArgs = (type, args) => args.every((arg) => typeof arg === type);

const createRegExpBundle = (source) => new RegExp(source.reduce((regExp, match) => {
    switch(match.length) {
        case 1: {
            regExp += (regExp.length? '\|' : '') + `\\${match}`;
            break;
        }
        default: {
            regExp += `|${match}`
        }
    }
    return regExp;
},''),'ig');

export { parseOperand, sameTypeArgs, createRegExpBundle };
