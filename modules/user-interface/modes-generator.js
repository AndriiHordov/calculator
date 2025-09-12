import modesData from "../../data/modes.js";

const [standard, math, engineer] = modesData.map(({ modeName, controlsSet }) => {
  const fieldset = document.createElement('fieldset');
  fieldset.className = modeName;
  const pads = controlsSet.map((set) => {
    const pad = document.createElement('ul');
    const { 
      tagName, 
      values, 
      className, 
      action, 
      type } = set;
    const controls = values.map((value) => {
      const padItem = document.createElement('li');
      const control = document.createElement(tagName);
      padItem.className = className;
      control.type = type;
      control.value = value;
      control.ariaLabel = value;
      padItem.append(control);
      return padItem;
    });
  pad.append(...controls);
  pad.className = `${pad.children[0].className}s`;
  return pad;
  });
  fieldset.append(...pads)
  return fieldset;
});

export {
    standard,
    math,
    engineer
};