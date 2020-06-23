import React from 'react';
import QuestionCard from './question-card';
import Comment from './comment';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const questionDetails = {
  'id-0': {id: 'id-0', company: 'Macrohard', position: 'Software Engineer', numComments: 0, xAgo: '3 hours ago', body: body,
           comments: []},
  'id-1': {id: 'id-1', company: 'Banana', position: 'Software Engineer', numComments: 2, xAgo: '7 hours ago', body: body,
           comments: [ {body: body, xAgo: '14 hours ago'},
                       {body: body, xAgo: '23 hours ago'}, ]},
  'id-2': {id: 'id-2', company: 'Poodle', position: 'Product Manager', numComments: 3, xAgo: '12 hours ago', body: body,
           comments: [ {body: body, xAgo: '12 hours ago'},
                       {body: body, xAgo: '14 hours ago'}, 
                       {body: body, xAgo: '2 days ago'}, ]},
  'id-3': {id: 'id-3', company: 'Bookface', position: 'Software Engineer', numComments: 0, xAgo: '2 days ago', body: body,
           comments: []}
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      comment: '',
      isAnonymous: true,
    };
    this.state = Object.assign({}, this.defaultState);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('comment: ' + this.state.comment);
    console.log('isAnonymous: ' + this.state.isAnonymous);
    this.setState(Object.assign({}, this.defaultState));
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.name === 'isAnonymous' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  render() {
    const q = questionDetails[this.props.match.params.id];
    const comments = q.comments;
    return (
      <div>
        <ScrollToTop/>
        <QuestionCard key={q.id} company={q.company} position={q.position}
          xAgo={q.xAgo} numComments={q.numComments} body={q.body} id={q.id}/>
        <div className='comments mb-3' style={{marginLeft: '30px'}}>
        {
          comments.map((c, i) =>
            <Comment key={i} username={c.username} body={c.body} xAgo={c.xAgo} />
          )
        }
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <textarea name="comment" value={this.state.comment} onChange={this.handleChange} className="form-control" placeholder="Please write your solution/comment in detail." rows="7"/>
            </div>
            <div className="form-check">
              <input type="checkbox" name="isAnonymous" checked={this.state.isAnonymous} onChange={this.handleChange} className="form-check-input"/>
              <label className="form-check-label">Submit Anonymously</label>
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default QuestionDetail;