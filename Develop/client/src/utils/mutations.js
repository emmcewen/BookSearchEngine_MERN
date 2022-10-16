import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
mutation login ($email:String!, $password:String!){
    login(email: $email,password:$password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
     token
     user{
         __id
         username
         email
         bookCount
         savedBooks{
             authors
             bookId
             image
             title
             description
         }
     }
    }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId:ID!) {
    saveBook(savedBook: $bookId) {
         __id
         username
         email
         savedBooks{
             authors
             bookId
             image
             title
             description
         }
     }
    }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
         __id
         username
         email
         avedBooks{
             authors
             bookId
             image
             title
             description
            link
         }
     }
    }
`;