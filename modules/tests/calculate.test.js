import { calculator } from "../logic/calculator.js";
import { testCases } from "../../data/tests.js";
import { runTests } from "./testRunner.js";

export function run() {
  runTests(calculator, testCases);
}
