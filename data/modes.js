const modesData = [
    {
      modeName: 'standard',
      controlsSet: [
        {
          tagName: 'input',
          values: [7,8,9,4,5,6,1,2,3,0,'.', ''],
          className: 'digit',
          action: [7,8,9,4,5,6,1,2,3,0,'.', null],
          type: 'button',
        },
        {
          tagName: 'input',
          values: ['(', ')','CE','+','-','C','x','/','mod','=','%', '√'],
          className: 'operator',
          action: ['openParenthese', 'closeParenthese', 'clearDisplay', 'add', 'sub', 'clearLast', 'mul', 'div', 'mod', 'equal', 'percent', 'sqrt'],
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

export default modesData;
