import { ApolloProvider } from "@apollo/client/react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import "../global.css";

import { apolloClient } from "../src/apollo/client";
import { store } from "../src/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Stack screenOptions={{ headerShown: false }} />
      </ApolloProvider>
    </Provider>
  );
}
