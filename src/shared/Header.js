import React from 'react'
import AskQuestion from '../question/AskQuestion'

export default () => <div className='jumbotron text-center'>
    <h1 className='text-white mb-3'>Travelers People. Travelers Knowledge.</h1>
    <div className='input-group input-group-lg w-50 ml-auto mr-auto'>
        <input className='form-control' placeholder='Search Questions' />
        <div className='input-group-append'>
            <i className='input-group-text fas fa-search' />
        </div>
    </div>
    <div className='mt-3'>
        <button type='button' className='btn btn-ask' data-toggle='modal' data-target='#askQuestion'>Ask a Question</button>
    </div>
    <AskQuestion />
</div>