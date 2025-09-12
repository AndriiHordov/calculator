import { calculatorEngine } from "../logic/engine.js";

const display = document.getElementById('display');

function setDisplay(source) {
  switch(source) {
    case 'Enter':
    case '=': {
      const result = calculatorEngine(display.value) ?? '';
      if(typeof result === 'object') {
        display.value = 'Error';
        display.title = result.error;
        display.classList.add('tooltip');
      } else {
        display.value = result;
        display.classList.remove('tooltip');
      }
      break;
    }
    case 'AC': {
      display.value = '';
      break;
    }
    case 'Backspace':
    case 'C' : {
      display.value = display.value.substring(0, display.value.length - 1);
      break;
    }
    default: {
      if(/[^.]/.test(source)) {
        display.value += source;
      } else {
        display.value += /\d+/.test(display.value) ? source : `0${source}`;
      }
    }
  }  
}

export default setDisplay;