import {createAction, handleActions} from "redux-actions";

// 액션 타입 설정
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수
// 다른 파일에서 호출해야 하므로 export
// export const increment = () => ({type: INCREMENT}); // 액션은 Object 형식으로 생성
// export const decrement = () => ({type: DECREMENT});

/* redux-actions의 createAction 사용 */
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈의 초기 상태 설정
const initialState = {
  number: 0
}

// 리듀서를 만들어서 내보내줌
// export default function reducer(state = initialState, action) {
  // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환합니다.
  // state = initialState 이렇게 하면 initialState 가 기본 값으로 사용됩니다.
  // switch (action.type) {
  //   case INCREMENT:
  //     return {number: state.number + 1};
  //   case DECREMENT:
  //     return {number: state.number - 1};
  //   default:
  //     return state; // 아무 일도 일어나지 않았을 경우 현재 상태 그대로 반환
  // }
// }


// reducer >>> handleActions
/* handleActions의 첫번째 파라미터는 액션을 처리하는 함수로 이루어진 객체이고, 두번째 파라미터는 초기상태 */
export default handleActions({
  [INCREMENT]: (state, action) => {
    return {number: state.number + 1};
  },

  [DECREMENT]: ({number}) => ({number: number - 1})
}, initialState); // initialState이 두번째 파라미터