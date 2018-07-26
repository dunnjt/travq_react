export default {
  Mutation: {
    setAuth: (_, { userId }, { cache }) => {
      const data = { auth: {userId: userId, __typename: 'Auth'} }
      cache.writeData({ data })
      return null
    },
    search: (_, { query, tags }, { cache }) => {
      const search = Object.assign(
        { __typename: 'Search' }, 
        query ? { query } : {}, 
        tags ? { tags } :{})
      const data = { search }
      cache.writeData({ data })
      return null
    }
  }
}