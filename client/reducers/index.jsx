import { combineReducers } from 'redux';
import textInput from './text-input';
import count from './counter';
import toggle from './toggle';

export default combineReducers({
  textInput,
  count,
  toggle
});
