const initialState = {
  one: false,
  two: false,
  three: false,
  four: false
};

const buttonState = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_BUTTON':
      return { ...state, [action.name]: !state[action.name] };
    default:
      return state;
  }
};

export default buttonState;
