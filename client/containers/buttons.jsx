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
        <div className="">
          <button name="one" className={this.props.buttonState.one && 'on'}>1</button>
          <button name="two" className={this.props.buttonState.two && 'on'}>2</button>
          <button name="three" className={this.props.buttonState.three && 'on'}>3</button>
          <button name="four" className={this.props.buttonState.four && 'on'}>4</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  buttonState: state.buttonState
});

export default connect(mapStateToProps)(Buttons);
