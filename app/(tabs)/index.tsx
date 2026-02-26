import { LoginScreen } from "@/src/screens/LoginScreen";
import { useQuery } from "@apollo/client/react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { ME_QUERY, MeQuery } from "../..//src/graphql/queries";
import { RootState } from "../../src/store";

export default function Home() {
  const token = useSelector((state: RootState) => state.auth.token);
  const { data, loading, error } = useQuery<MeQuery>(ME_QUERY, {
    skip: !token,
  });
  if (!token) return <LoginScreen />;
  if (loading) return <Text>Loading...</Text>;
  if (error || !data) return <Text>Error: {error?.message}</Text>;

  return (
    <View>
      <Text>hellooooo {data.me.email}</Text>
    </View>
  );
}
