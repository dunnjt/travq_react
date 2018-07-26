import React from 'react'
import { Mutation } from 'react-apollo'

import SEARCH from '../graphql/search.graphql'

export default ({ name }) => 
  <Mutation mutation={SEARCH}>
    {mutate => (
      <button onClick={() => {
        mutate({variables: {tage: [name]}})
      }} className='btn'>
        #{name}
      </button>
    )}
  </Mutation>