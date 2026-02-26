import { gql } from "@apollo/client";
import { User } from "../types/user";

export type MeQuery = {
  me: User;
};

export const ME_QUERY = gql`
  query Me {
    me {
      id
      email
      firstName
      lastName
      role
    }
  }
`;
