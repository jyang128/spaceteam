import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.props.dispatch(incrementCounter());
  }
  decrement() {
    this.props.dispatch(decrementCounter());
  }
  render() {
    return (
      <div className="counter container">
        <h2>{this.props.name}</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);
