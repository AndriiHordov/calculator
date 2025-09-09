import { calculatorEngine } from "./engine.js";

const history = document.getElementById('history');
const historyItem = document.createElement('li');

const display = document.getElementById('display');

function inputHandler(e) {
  const target = e.target;
  switch(target.dataset.action) {
    case 'equal': {
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
    case 'clearDisplay': {
      display.value = '';
      break;
    }
    case 'clearLast' : {
      display.value = display.value.substring(0, display.value.length - 1);
      break;
    }
    default: {
      if(target.type !== 'button') return;
      if(/[^.]/.test(target.value)) {
        display.value += target.value;
      } else {
        display.value += /\d+/.test(display.value) ? target.value : `0${target.value}`;
      }
    }
  }  
}

export default inputHandler;
