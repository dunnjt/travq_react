import React, { PureComponent } from 'react'
import Question from './Question'

class QuestionsList extends PureComponent {
  componentDidMount() {
    //window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    //window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.props.questions && this.props.questions.length
    ) {
      this.props.onLoadMore()
    }
  }

  render() {
    const { questions } = this.props
    return (
      <ul className="list-group mb-2">
        {questions && questions.map((q, i)=> <Question key={i} {...q }/>)}
      </ul>
    )
  }
}

export default QuestionsList