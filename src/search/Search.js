import React from 'react'
import { Mutation } from 'react-apollo'

import SEARCH from '../graphql/search.graphql'

export default () => 
  <div>
    <Mutation mutation={SEARCH}>
      {mutate => (
        <div></div>
      )}
    </Mutation>
  </div>
// mutate({variables: { query: 'bananas'}})


