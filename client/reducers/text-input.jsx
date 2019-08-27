const initialState = 'Hello!';

const textInput = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_TEXT':
      return action.text;
    default:
      return state;
  }
};

export default textInput;
