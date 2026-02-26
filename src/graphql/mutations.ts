import { gql } from "@apollo/client";

export interface LoginUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface LoginResponse {
  login: {
    token: string;
    refreshToken: string;
    user: LoginUser;
  };
}

export interface LoginVariables {
  email: string;
  password: string;
}

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      refreshToken
      user {
        id
        email
        firstName
        lastName
        role
      }
    }
  }
`;
