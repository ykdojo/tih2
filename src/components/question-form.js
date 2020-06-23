import React from 'react';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      company: '',
      position: '',
      question: '',
      isAnonymous: true,
    }

    // Make a copy of defaultState before assinging it to state.
    this.state = Object.assign({}, this.defaultState);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('company: ' + this.state.company);
    console.log('position: ' + this.state.position);
    console.log('question: ' + this.state.question);
    console.log('isAnonymous: ' + this.state.isAnonymous);
    
    this.setState(Object.assign({}, this.defaultState));
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.name === 'isAnonymous' ? target.checked : target.value;
    this.setState({[target.name]: value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Company</label>
          <input type="text" name="company" value={this.state.company} onChange={this.handleChange} className="form-control" placeholder="Which company gave this question?"/>
        </div>
        <div className="form-group">
          <label>Position</label>
          <input type="text" name="position" value={this.state.position} onChange={this.handleChange} className="form-control" placeholder="Which position was it for?"/>
        </div>
        <div className="form-group">
          <label>Question</label>
          <textarea name="question" value={this.state.question} onChange={this.handleChange} className="form-control" placeholder="Please describe the question in detail." rows="7"/>
        </div>
        <div className="form-check">
          <input type="checkbox" name="isAnonymous" checked={this.state.isAnonymous} onChange={this.handleChange} className="form-check-input"/>
          <label className="form-check-label">Submit Anonymously</label>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default QuestionForm;