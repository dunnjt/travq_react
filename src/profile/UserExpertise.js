import React from 'react'
import Tag from '../shared/Tag'

export default () =>
    <div className='col text-center'>
        <div className='middle-image'>
            <img className='mx-auto rounded-circle' src='imgs/face_big.jpg' />
        </div>
        <h3 className='mb-4'>Hey Allie, check out your stats!</h3>
        <div className='tag-group mb-3'>
            <Tag name="UX" />
            <Tag name="LossReport" />
            <Tag name="TRVHartford" />
            <Tag name="PropertyClaims" />
            <Tag name="Earthquakes" />           
        </div>
        <button className='btn btn-link'>Edit/Add Expertise</button>
    </div>