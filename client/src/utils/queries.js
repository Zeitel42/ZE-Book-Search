// import { gql } from "@apollo/client";
import gql from "graphql-tag";
// import { getSavedBookIds } from "./localStorage";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
