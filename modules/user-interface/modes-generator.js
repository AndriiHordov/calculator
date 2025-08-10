import modesData from "../../data/modes.js";

const [standard, math, engineer] = modesData.map(({ modeName, controlsSet }) => {
  const fieldset = document.createElement('fieldset');
  fieldset.className = modeName;
  const { 
    tagName, 
    values, 
    className, 
    action, 
    type } = controlsSet;
  const controls = values.map((value) => {
    const control = document.createElement(tagName);
    control.className = className;
    control.dataset.action = action;
    control.type = type;
    control.value = value;
    control.ariaLabel = value;
    return control;
  });
  fieldset.append(...controls);
  return fieldset;
});

export {
    standard,
    math,
    engineer
};