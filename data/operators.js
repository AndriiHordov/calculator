export const operatorDescriptors = {
 binaryOperators: {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b,
    rem: (a, b) => a % b,
  },
 operatorsPrecedence: {
    'add': 1,
    'sub': 1,
    'mul': 2,
    'div': 2,
    'rem': 2,
    'neg': 3,
    'per': 3,
    'exp': 4,
  },
 unaryOperators: {
    neg: (a) => -a,
    per: (a) => a / 100,
    sqrt: (a) => Math.sqrt(a),
  },
  aliases: {
    '+': 'add@',
    '-': 'sub@',
    '×': 'mul@',
    '/': 'div@',
    '√': 'sqrt@',
    '(': 'oPars@',
    ')': 'cPars@',
    '%': 'per@',
    'rem': 'rem@',
    }
}

