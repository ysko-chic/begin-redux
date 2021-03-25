import React, {Component} from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import {CounterActions} from 'store/actionCreators';

class CounterContainer extends Component {
  handleIncrement = () => {
    CounterActions.increment();
  }

  handleDecrement = () => {
    CounterActions.decrement();
  }

  render() {
    const {handleIncrement, handleDecrement} = this;
    const {number} = this.props;

    return (
      <Counter number={number} onIncrement={handleIncrement} onDecrement={handleDecrement} />
    )
  }
}

// connect >> store에 있는 state와 action을 해당 컴포넌트에 props로 넘겨주는 작업



// // store의 state값을 컴포넌트에 props로 전달할때 사용하는 함수
// const mapStateToProps = (state) => ({
//   number: state.counter.number
// });

// // store의 action 함수를 컴포넌트에 props로 전달할때 사용하는 함수
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(counterActions.increment()),
//   decrement: () => dispatch(counterActions.decrement())
// });

// // 컴포넌트를 리덕스와 연결 할 때에는 connect를 사용
// // connect() 의 결과는 컴포넌트에 props를 넣어주는 함수를 반환
// // 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됨
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);




// 위의 함수를 connect 내부에 정의 하는 코드
export default connect(
  (store) => ({
    number: store.counter.number
  })
)(CounterContainer);
