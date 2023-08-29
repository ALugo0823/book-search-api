//import our gql from apollo client
import { gql } from '@apollo/client';

// create query for GET_ME
export const GET_ME = gql`
  query user {
    user {
      _id
      username
    }
  }
`;
