import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { store } from "../store";

const httpLink = new HttpLink({
  uri: "http://127.0.0.1:3000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = store.getState().auth.token;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});
