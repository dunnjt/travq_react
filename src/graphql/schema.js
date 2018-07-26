export default `
  type Answer {
    id: String!
    answer: String!
    username: String!
    createdOn: String!
    votes: Int!
  }

  type Question {
    id: String!
    question: String!
    createdOn: String!
    username: String!
    tags: [String!]!
    answers: [Answer]!
  }

  type User {
    id: String!
    name: String!
    email: String!
    password: String!
    skills: [String!]!
    points: Int!
    badges: [String!]!
  }

  type Auth {
    userId: String
  }

  type Search {
    query: String
    tags: [String]
  }

  type Query {
    search: Search
    auth: Auth  
    user(userId: String!): User
    questions(
      search: String, 
      tags: [String],
      offset: Int, 
      limit: Int): [Question]!
  }

  type Mutation {
    search(query: String!): Search
    setAuth(userId: String!): Auth
    answer(
      userId: String!, 
      questionId: String!, 
      answer: String!) : Question

    createQuestion(
      userId: String!, 
      question: String!, 
      tags: [String!]!) : Question

    createUser(
      name: String!, 
      email: String!, 
      password: String!, 
      skills: [String!]!) : User

    vote(
      userId: String!, 
      questionId: String!, 
      answerId: String! , 
      amount: Int!) : Question
    } 
`