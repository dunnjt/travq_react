import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Router } from 'react-router-dom'
import typeDefs from './graphql/schema'
import resolvers from './resolvers'
import history from './lib/history'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const cache = new InMemoryCache()

const defaults = {
  auth: {
    __typename: 'Auth',
    userId: ''
  },
  search: {
    __typename: 'Search',
    query: '',
    tags: []
  },
  questions: [{   
    __typename: 'Question',
    id: '1',
    username: 'dscalo',
    question: 'What is the best ice cream flavor?',
    createdOn: '09/29/2017',
    tags: ['food', 'desert', 'ice cream'],
    answers: [
      {
        __typename: 'Answer',
        username: 'pancakes',
        answer: 'mint cholate chip!!!!',
        createdOn: '10/12/2017',
        votes: 32
      }
    ]
  }]
}

const client = new ApolloClient({
  uri:'/graphql/',
  dataIdFromObject: o => o.id,
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  },
  cache: cache,
  connectToDevTools: true
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>, 
document.getElementById('root'))
registerServiceWorker()
