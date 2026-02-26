import { gql } from "@apollo/client";
import type { User } from "../types/user";

export interface MeQuery {
  me: User;
}

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
