import {createAction, handleActions} from 'redux-actions';
import {Record, List} from 'immutable';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0;

const initialState = Record({
  input: '',
  todos: List()
})();

const TodoRecord = Record({ // Record는 초반에 정의한 값만 사용할 수 있다. 다른곳에서 현재 상태에 변수를 추가하려면 Map.set("number", 1) 이런식으로 Map을 사용
  id: id++,
  text: '',
  checked: false
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
  [INSERT]: (state, {payload: text}) => {
    const item = TodoRecord({id: id++, text: text});
    return state.update('todos', todos => todos.push(item));
  },
  [TOGGLE]: (state, {payload: id}) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.updateIn(['todos', index, 'checked'], checked => !checked);
  },
  [REMOVE]: (state, {payload: id}) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.deleteIn(['todos', index]);
  }
}, initialState);


