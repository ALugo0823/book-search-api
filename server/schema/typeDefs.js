const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
        _id: ID!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
        bookId: String!
      }

      type Auth {
        token: ID!
        user: User
      }

      input BookInput{
        bookId: String!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
      }

      type Query {
        me: User
      }

      type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        removeBook(bookId: String!): User
        saveBook(input: BookInput): User
    
  }`;

module.exports = typeDefs;