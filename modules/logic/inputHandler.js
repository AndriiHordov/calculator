import calculator  from "./calculator.js";

const history = document.getElementById('history');
const historyItem = document.createElement('li');

const display = document.getElementById('display');

function inputHandler(e) {
  const target = e.target;
  switch(target.dataset.action) {
    case 'equal': {
      display.value = calculator(display.value) ?? '';
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
  
// switch(target.parentElement.className) {
  //   case 'digit': {
  //     if(!resultFlag) {
  //       display.value += target.value;
  //     } else {
  //       display.value = '';
  //       resultFlag = false;
  //       display.value += target.value;
  //     }
  //     break;
  //   }
  //   case 'operator': {
  //     const [newHistoryItem, newHistoryOperator] = [0,1].map(el => historyItem.cloneNode());
  //     let result = '';
  //     if(!buffer.length) {

  //       buffer.operand1 = display.value;
  //       buffer.operand2 = target.value;
  //       newHistoryItem.textContent = display.value;
  //       newHistoryOperator.textContent = target.value;
  //     } else {
  //       buffer.operand1 = display.value;
  //       result = binary(buffer);
  //       buffer.length = 0;
  //       buffer.push(result, target.value);
  //       newHistoryItem.textContent = result;
  //       newHistoryOperator.textContent = target.value;
  //       resultFlag = true;
  //     }
  //     history.append(newHistoryItem, newHistoryOperator);
  //     display.value = result;
  //   }
  //   default: {
  //     return null;
  //   }
        
  //   }
    
}

export default inputHandler;
