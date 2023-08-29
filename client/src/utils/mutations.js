//import our gql from apollo client
import { gql } from '@apollo/client';

//create mutation for LOGIN_USER 
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        email
        password
    }
}
`;
//create mutation for ADD_USER 

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        username
        email
        password
    }
}
`;
//create mutation for SAVE_BOOK 

export const SAVE_BOOK = gql`
  mutation saveBook($book: BookInput!) {
    saveBook(book: $book) {
        id
        title
        authors
        description
        image
        link
    }
}
`;
//create mutation for REMOVE_BOOK 

export const REMOVE_BOOK = gql`
  mutation removeBook($id: ID!) {
    removeBook(id: $id) {
        id
    }
}
`;