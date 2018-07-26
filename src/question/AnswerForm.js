import React, { PureComponent } from 'react'

class AnswerForm extends PureComponent {
    state = { answer: '' }

    onChangeAnswer = event => this.setState({ answer: event.target.value })

    render() {
        return (
            <li className='list-group-item travq-answer'>
                <textarea onChange={this.onChangeAnswer} className='form-control' placeholder='Your Answer'>{this.state.answer}</textarea>
            </li>
        )
    }
}

export default AnswerForm