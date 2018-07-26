import React from 'react'

export default ({answer, username, votes}) => (
    <li className='list-group-item travq-answer'>
        <div className='row'>
            <div className='col user-box'>
                <i className='fas fa-4x fa-user-circle text-muted' />
                {/* <img className='rounded-circle' src='http://via.placeholder.com/60x60' /> */}
                <span>{username}</span>
            </div>
            <span className='col-9'>{answer}</span>
            <div className='col text-center'>
                <div className='voteButton'><i className='fas fa-2x fa-angle-up' /></div>
                <div>{votes}</div>
                <div className='voteButton'><i className='fas fa-2x fa-angle-down' /></div>
            </div>
        </div>
    </li>
)