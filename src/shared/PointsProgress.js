import React from 'react'

export default ({ points = 500, maxPoints }) => {
    const percentage = points / maxPoints
    return (
        <div className='d-table'>
            <div className='point-circle'>{points.toLocaleString()}</div>
        </div>)
}