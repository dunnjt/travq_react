import React from 'react'
import Badge from './Badge'

export default () => <div className='col text-center badge-collection'>
    <h2 className='text-center'>Elite Badge Collection</h2>
    <Badge />
    <Badge icon={'person'} />
    <Badge icon={'anchor'} />
    <Badge icon={'umbrella'} />
    <Badge icon={'chart'} />
</div>