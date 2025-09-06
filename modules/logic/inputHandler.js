import { parser } from "./math.js";

const display = document.getElementById('display');

function inputHandler(e) {
  const target = e.target;
  switch(target.dataset.action) {
    case 'equal': {
      display.value = parser(display.value) ?? '';
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
        display.value += /[.]/.test(display.value) ? '' : /\d+/.test(display.value) ? target.value : '';
      }
    }
  
  }
    
}

export default inputHandler;
