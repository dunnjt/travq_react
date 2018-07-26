import React from 'react'
import { Query } from 'react-apollo'
import AUTH_QUERY from './graphql/authQuery.graphql'
import USER_QUERY from './graphql/userQuery.graphql'

export default (Comp) => props => 
  <Query query={AUTH_QUERY}>
    {({ data: { auth } }) => {       
      return (
        <Query 
          query={USER_QUERY}          
          variables={{id: auth.userId}}
          fetchPolicy="cache-and-network">
          {({ data: { user } = {} }) => {
            return <Comp {...props} user={ user || {}} />
          }}
          
        </Query>
      )
    }}
  </Query>
  