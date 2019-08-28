const initialState = false;

const toggle = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return !state;
    default:
      return state;
  }
};

export default toggle;
