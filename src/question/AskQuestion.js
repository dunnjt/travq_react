import React, { PureComponent, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import QUESTION from '../graphql/question.graphql'
import QUESTION_QUERY from '../graphql/questionsQuery.graphql'

import isLoggedIn from '../isLoggedIn'

class AskQuestion extends PureComponent {
    state = { question: '', tags: [] }

    onChangeQuestion = event => this.setState({ question: event.target.value })
    onChangeTags = event => this.setState({ tags: event.target.value.split(' ') })

    render() {
        const { user } = this.props
        return (
            <div className='modal fade' id='askQuestion' tabIndex='-1' role='dialog' aria-labelledby='askQuestionLabel' aria-hidden='true'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='askQuestionLabel'>Question</h5>
                        </div>
                        {user.id ?
                            (<Mutation mutation={QUESTION} >
                                {mutate => (
                                    <div>
                                        <div className='modal-body'>
                                            <div className='text-left mb-2'>Hi There! Ask your question and allow peers and coworkers both local and global help you get your answer.</div>
                                            <form>
                                                <div className='form-group'>
                                                    <textarea onChange={this.onChangeQuestion} className='form-control' id='message-text'></textarea>
                                                </div>
                                                <div className='form-group'>
                                                    <input placeholder='#woodchuck' onChange={this.onChangeTags} className='form-control' />
                                                </div>
                                                <div className='form-group'>
                                                    <div className='form-check'>
                                                        <input className='form-check-input' type='checkbox' id='gridCheck' />
                                                        <label className='form-check-label' htmlFor='gridCheck'>Notify me when someone responds</label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className='text-center'>
                                            <button
                                                type='button'
                                                onClick={() => {
                                                    mutate({ 
                                                        variables: { question: this.state.question, userId: user.id, tags: this.state.tags },
                                                        refetchQueries:QUESTION_QUERY },
                                                    )
                                                }}
                                                className='btn btn-travq'>Submit Question
                                    </button><br />

                                        </div>
                                    </div>
                                )}
                            </Mutation>)
                            : (<h1>Please <a data-toggle='modal' href='#loginModal' data-dismiss='modal'>log in</a> or <a data-toggle='modal' href='#signupModal' data-dismiss='modal'>sign up</a> first</h1>)
                        }
                        <button type='button' className='btn py-2 my-1 btn-link' data-dismiss='modal'>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default isLoggedIn(AskQuestion)
