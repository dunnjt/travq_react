import React from 'react'
import Answer from './Answer'
import AnswerForm from './AnswerForm'

export default ({ id, question, createdOn, username, tags, answers }) => (<ul className='list-group mb-2'>
    <li className='list-group-item travq-question'>
        <div className='d-flex'>
            <div className='p-2 flex-grow-1'>
                <h4>{question}</h4>
                <div className='d-flex'>
                    <button className='btn btn-secondary btn-sm'><i className='fa fa-star' /> Favorite</button>
                    <div className='flex-grow-1 text-right'>
                        <i className='fas text-muted fa-user-circle' /> {username}
                    </div>
                </div>
            </div>
            <div className='p-2'>
                <span className='badge badge-primary'>{answers.length}</span>
            </div>
        </div>
    </li>
    {
        answers && answers.map((a, i) => <Answer key={i} {...a} />)
    }
    <AnswerForm />
</ul>
)