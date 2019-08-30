const buttonState = (state = {}, action) => {
  switch (action.type) {
    case 'CLICK_BUTTON':
      return { ...state, [action.name]: !state[action.name] };
    default:
      return state;
  }
};

export default buttonState;
