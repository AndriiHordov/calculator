
const testCases = {
  basicArithmetic: [
    { input: { operator: "add", args: [1, 2] }, expected: 3 },
    { input: { operator: "sub", args: [5, 7] }, expected: -2 },
    { input: { operator: "mul", args: [10, 2] }, expected: 20 },
    { input: { operator: "div", args: [20, 4] }, expected: 5 },
  ],
  edgeCases: [
    { input: { operator: "add", args: [0, 0] }, expected: 0 },
    { input: { operator: "sub", args: [0, 5] }, expected: -5 },
    { input: { operator: "sub", args: [5, 0] }, expected: 5 },
    { input: { operator: "mul", args: [0, 12345] }, expected: 0 },
    { input: { operator: "div", args: [1, 0] }, expected: 0 },
    { input: { operator: "neg", args: [3, ] }, expected: -3},
    { input: { operator: "neg", args: [-3, ] }, expected: 3},
  ],
};
export { testCases };