import React from 'react';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Company</label>
          <input type="text" name="company" className="form-control" placeholder="Which company gave this question?"/>
        </div>
        <div className="form-group">
          <label>Position</label>
          <input type="text" name="position" className="form-control" placeholder="Which position was it for?"/>
        </div>
        <div className="form-group">
          <label>Question</label>
          <textarea name="question" className="form-control" placeholder="Please describe the question in detail." rows="7"/>
        </div>
        <div className="form-check">
          <input type="checkbox" name="isAnonymous" className="form-check-input"/>
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