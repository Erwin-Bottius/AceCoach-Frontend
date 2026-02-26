import React, { ComponentType } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

type AuthInputProps = TextInputProps & {
  label: string;
  Icon: ComponentType<any>;
  iconName: string;
  iconSize?: number;
  iconColor?: string;
};

export const AuthInput: React.FC<AuthInputProps> = ({
  label,
  Icon,
  iconName,
  iconSize = 18,
  iconColor = "#94a3b8",
  ...props
}) => {
  return (
    <View className="mb-4">
      <Text className="text-sm font-medium text-slate-700 mb-1">{label}</Text>
      <View className="relative">
        <Icon
          name={iconName}
          size={iconSize}
          color={iconColor}
          className="absolute left-3 top-3"
        />
        <TextInput
          className="pl-10 pr-4 py-3 border border-slate-200 rounded-xl"
          {...props}
        />
      </View>
    </View>
  );
};
