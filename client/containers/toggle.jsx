import React from 'react';
import { connect } from 'react-redux';
import { moveToggle } from '../actions';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.props.dispatch(moveToggle());
  }
  render() {
    const toggleClass = this.props.toggleState ? 'on' : '';
    return (
      <div className="toggle container">
        <div className="outer">
          <div className={`inner ${toggleClass}`} onClick={this.handleToggle}>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toggleState: state.toggle
});

export default connect(mapStateToProps)(Toggle);
