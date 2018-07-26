import React from 'react'
import PointsProgress from '../shared/PointsProgress'

export default () => <div className='col text-center'>
    <h2>Collected Points</h2>
    <PointsProgress points={650} maxPoints={800} />
    <button type='button' className='btn btn-travq'>Redeem Rewards</button>
</div>