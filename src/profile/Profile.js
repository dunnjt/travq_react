import React from 'react'
import BadgeCollection from './BadgeCollection'
import CollectedPoints from './CollectedPoints'
import UserExpertise from './UserExpertise'

export default () => (
    <div className='row mb-5'>
        <CollectedPoints />
        <UserExpertise />
        <BadgeCollection />
    </div>
)