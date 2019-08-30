const initialState = 0;

const sliderState = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_SLIDER':
      return action.number;
    default:
      return state;
  }
};

export default sliderState;
