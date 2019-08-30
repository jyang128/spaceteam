import React from 'react';
import { connect } from 'react-redux';
import { clickButton } from '../actions';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtons = this.handleButtons.bind(this);
  }
  handleButtons(event) {
    this.props.dispatch(clickButton(event.target.name));
  }
  render() {
    return (
      <div className="buttons container">
        <h2>{this.props.name}</h2>
        <button
          name="one"
          onClick={this.handleButtons}
          className={this.props.buttonState.one ? 'on' : ''}>
            1
        </button>
        <button
          name="two"
          onClick={this.handleButtons}
          className={this.props.buttonState.two ? 'on' : ''}>
            2
        </button>
        <button
          name="three"
          onClick={this.handleButtons}
          className={this.props.buttonState.three ? 'on' : ''}>
            3
        </button>
        <button
          name="four"
          onClick={this.handleButtons}
          className={this.props.buttonState.four ? 'on' : ''}>
            4
        </button>
        <button
          name="five"
          onClick={this.handleButtons}
          className={this.props.buttonState.five ? 'on' : ''}>
            5
        </button>
        <button
          name="six"
          onClick={this.handleButtons}
          className={this.props.buttonState.six ? 'on' : ''}>
            6
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  buttonState: state.buttonState
});

export default connect(mapStateToProps)(Buttons);
