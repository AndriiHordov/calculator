import { standard } from "./user-interface/modes-generator.js";
import inputHandler from "./logic/inputHandler.js";
import { run } from "./tests/calculate.test.js";

const userInterface = document.getElementsByClassName('calculator')[0];
userInterface.append(standard);
userInterface.addEventListener('click', inputHandler);
document.addEventListener('keydown', inputHandler);
run();
