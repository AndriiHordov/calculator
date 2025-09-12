import setDisplay from "../user-interface/display.js";

function inputHandler(e) {
  if(e.type === 'click') {
    if(e.target.type !== 'button') return;
    setDisplay(e.target.value);
  } else {
    if(e.key.length > 1) {
      if(!['Backspace', 'Enter'].includes(e.key)) return;
    } else {
      if(/\s/.test(e.key)) return;
    }
    setDisplay(e.key);
  }
}




export default inputHandler;
