import React from 'react';

export default class TextInput extends React.Component {
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
      text: '',
      shownText: this.state.text
    });
  }
  render() {
    return (
      <div className="text-input container">
        <h1 className="container">{this.state.shownText}</h1>
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
