import React from 'react'
import { Query } from 'react-apollo'
import QUESTIONS_QUERY from '../graphql/questionsQuery.graphql'
import SEARCH_QUERY from '../graphql/searchQuery.graphql'
import QuestionsList from './QuestionsList';



export default () => (
    <Query query={SEARCH_QUERY}>
      {({ data: { search } }) => {
        return (
          <Query 
            query={QUESTIONS_QUERY} 
            variables={{search: search.query, tags: search.tags, offset: 0, limit:10}}
            fetchPolicy="cache-and-network"
            >
            {({ loading, error, data, fetchMore }) => {
              // TODO: make this a component
              if (loading) return 'Loading...'
              // TODO handle error
              if (error) return `ERROR!!!! ${error.message}`
              return (
                <QuestionsList questions={data.questions}
                  onLoadMore={() => { 
                    fetchMore({
                      variables: {
                        offset: data.questions.length,
                        search: search.query,
                        tags: search.tags
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev
                        return {...prev,
                          questions: [
                            ...prev.questions, 
                            ...fetchMoreResult.questions
                          ]
                        }
                      }
                    })
                  }}
                />
              )
            }}
          </Query>
        )
      }}
    </Query>    
  )
