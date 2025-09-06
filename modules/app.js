import { standard } from "./user-interface/modes-generator.js";
import inputHandler from "./logic/inputHandler.js";

const userInterface = document.getElementsByClassName('calculator')[0];
userInterface.append(standard);
userInterface.addEventListener('click', (e) => inputHandler(e));
