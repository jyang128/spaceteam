import React from 'react';
import { connect } from 'react-redux';
import { saveText } from '../actions';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      shownText: 'Hello!'
    };
    this.handleText = this.handleText.bind(this);
    this.submitText = this.submitText.bind(this);
  }
  handleText(event) {
    let text = event.target.value;
    if (text.length > 15) return;
    this.setState({ text });
  }
  submitText(event) {
    event.preventDefault();
    this.setState({
      text: ''
    });
    this.props.dispatch(saveText(this.state.text));
  }
  render() {
    return (
      <div className="text-input container">
        <h2>{this.props.shownText}</h2>
        <form onSubmit={this.submitText}>
          <input
            type="text"
            value={this.state.text}
            placeholder="Update the title"
            required="text"
            onChange={this.handleText}
          />
          <button type="submit" >
                Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shownText: state.textInput
});

export default connect(mapStateToProps)(TextInput);
