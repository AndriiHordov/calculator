const modesData = [
    {
      modeName: 'standard',
      controlsSet: [
        {
          tagName: 'input',
          values: [0,1,2,3,4,5,6,7,8,9],
          className: 'digits',
          action: 'digit',
          type: 'button',
        },
        {
          tagName: 'input',
          values: ['+','-','*','/','=','mod','%'],
          className: 'operators',
          action: 'operator',
          type: 'button',
        },
      ]
    },
    // {
    //   modeName: 'math',
    //   controlsSet: [
    //   ]
    // },
    // {
    //   modeName: 'standard',
    //   controlsSet: [
    //   ]
    // },

]
const modes = modesData.map(({ modeName, controlsSet }) => {
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
export default modes;
