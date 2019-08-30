import { combineReducers } from 'redux';
import textInput from './text-input';
import count from './counter';
import toggle from './toggle';
import buttonState from './buttons';
import sliderState from './slider';

export default combineReducers({
  textInput,
  count,
  toggle,
  buttonState,
  sliderState
});
