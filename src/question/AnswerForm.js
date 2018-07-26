import React, { PureComponent } from 'react'
import isLoggedIn from '../isLoggedIn'
import { Mutation } from 'react-apollo'
import ANSWER from '../graphql/answer.graphql'

class AnswerForm extends PureComponent {
    state = { answer: '' }

    onChangeAnswer = event => this.setState({ answer: event.target.value })

    render() {
        const { user, questionId } = this.props
        return (           
            <Mutation mutation={ANSWER}>
            {mutate => (
                <li className='list-group-item travq-answer'>
                    <textarea disabled={!user.id}
                    onChange={this.onChangeAnswer} 
                    className='form-control' 
                    placeholder='Your Answer'>{this.state.answer}</textarea>
                    <div className='text-right mt-1'>
                        <button disabled={!user.id} onClick={()=> {                            
                            mutate({variables: {userId: user.id, answer: this.state.answer, questionId: questionId} })
                        }} className='btn btn-secondary btn-sm'>Submit</button>
                    </div>
                </li>
            )}
            </Mutation>            
        )
    }
}

export default isLoggedIn(AnswerForm)