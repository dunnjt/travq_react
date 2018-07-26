import React from 'react'

export default ({ points = 500, maxPoints }) => {
    const percentage = (points / maxPoints) * 100
    return (
        <div className='w-100 mb-3'>
            <div className='point-circle'>{points.toLocaleString()}</div>
        </div>
    )
}