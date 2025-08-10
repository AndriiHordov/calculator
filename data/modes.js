const modesData = [
    {
      modeName: 'standard',
      controlsSet: [
        {
          tagName: 'input',
          values: [0,1,2,3,4,5,6,7,8,9],
          className: 'digit',
          action: 'digit',
          type: 'button',
        },
        {
          tagName: 'input',
          values: ['+','-','*','/','=','mod','%'],
          className: 'operator',
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

export default modesData;
