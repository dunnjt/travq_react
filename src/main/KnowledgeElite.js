import React from 'react'

const EliteUser = ({ user }) => (
    <li className='p-3 list-group-item'>
        <div className='d-flex'>
            <div>
                <img className='rounded-circle' src={`imgs/face${user.face}.jpg`} />
            </div>
            <div className='pl-3 pt-1 flex-grow-1'>
                <strong>{user.name}</strong>
                <br />
                <span>{user.title}</span>
                <br />
                <span>{user.points.toLocaleString()} pts collected</span>
            </div>
        </div>
    </li>
)


export default () =>
    <div className='col'>
        <h2 className='text-center'>Knowledge Elite</h2>
        <ul className='list-group knowledge-elite'>
            <EliteUser user={{ name: 'Drexel Harris', title: 'Level VI Claim Elite', points: 74988, face: 1 }} />
            <EliteUser user={{ name: 'Suma Vashnik', title: 'Level III Security Elite', points: 59267, face: 2 }} />
            <li className='list-group-item p-3 text-center'>
                <a href='#'>View All</a>
            </li>
        </ul>
    </div>