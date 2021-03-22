import {combineReducers} from 'redux';
import counter from './counter';
import todo from './todo';

export default combineReducers({  // redux의 combineReducers로  reducer를 합쳐서 내보내준다.
  counter,
  todo
});