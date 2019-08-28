// action creators here
export const incrementCounter = () => ({
  type: 'INCREMENT'
});

export const decrementCounter = () => ({
  type: 'DECREMENT'
});

export const saveText = text => ({
  type: 'SAVE_TEXT',
  text
});

export const moveToggle = () => ({
  type: 'TOGGLE'
});
