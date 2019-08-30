import React from 'react';
import { connect } from 'react-redux';
import { changeSlider } from '../actions';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.handleSlider = this.handleSlider.bind(this);
  }
  handleSlider(event) {
    this.props.dispatch(changeSlider(event.target.value));
  }
  render() {
    return (
      <div className="slider container">
        <h2>{this.props.name}: {this.props.sliderState}</h2>
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={this.props.sliderState}
          onChange={this.handleSlider}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sliderState: state.sliderState
});

export default connect(mapStateToProps)(Slider);
