export const operatorDescriptors = {
 binaryOperators: {
    'add': (a, b) => a + b,
    'sub': (a, b) => a - b,
    'mul': (a, b) => a * b,
    'div': (a, b) => a / b,
    'mod': (a, b) => a % b,
  },
 operatorsPrecedence: {
    'add': 1,
    'sub': 1,
    'mul': 2,
    'div': 2,
    'mod': 2,
    'neg': 3,
    'exp': 4,
  },
 unaryOperators: {
  neg: (a) => -a,
  },
  aliases: {
      '+': 'add@@',
      '-': 'sub@@',
      'x': 'mul@@',
      '/': 'div@@',
      '√': 'sqrt@',
      '(': 'oPars',
      ')': 'cPars',
    }
}
