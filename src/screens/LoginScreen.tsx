import { useMutation } from "@apollo/client/react";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { AuthInput } from "../../components/AuthInput";
import { Logo } from "../../components/Logo";
import { PrimaryButton } from "../../components/PrimaryButton";
import { type LoginResponse, type LoginVariables, LOGIN_MUTATION } from "../graphql/mutations";

import { loginUser } from "../store/authSlice"; // ton slice Redux

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMutation, { loading }] = useMutation<LoginResponse, LoginVariables>(LOGIN_MUTATION);

  const handleLogin = async () => {
    try {
      const response = await loginMutation({
        variables: { email, password },
      });

      if (response.data?.login?.token) {
        dispatch(
          loginUser({
            token: response.data.login.token,
            refreshToken: response.data.login.refreshToken,
            user: response.data.login.user,
          }),
        );
      } else {
        alert("Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-slate-50 justify-center items-center p-4"
    >
      <View className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <View className="flex justify-center mb-6 items-center">
          <Logo />
        </View>

        <Text className="text-2xl font-bold text-center text-slate-900 mb-2">Welcome Back</Text>
        <Text className="text-slate-500 text-center text-sm mb-8">
          Sign in to access your classes
        </Text>

        <AuthInput
          label="Email"
          placeholder="john@example.com"
          Icon={MaterialIcons}
          iconName="email"
          value={email}
          onChangeText={setEmail}
        />

        <AuthInput
          label="Password"
          placeholder="••••••••"
          Icon={MaterialIcons}
          iconName="lock"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <PrimaryButton
          title={loading ? "Signing in..." : "Sign In"}
          Icon={MaterialIcons}
          iconName="arrow-forward"
          onPress={handleLogin}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
