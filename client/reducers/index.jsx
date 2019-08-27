import { combineReducers } from 'redux';
import textInput from './text-input';
import count from './counter';

export default combineReducers({
  textInput,
  count
});
