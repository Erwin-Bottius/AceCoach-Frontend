import React, { type ComponentType } from "react";
import { type TouchableOpacityProps, Text, TouchableOpacity } from "react-native";

type PrimaryButtonProps = TouchableOpacityProps & {
  title: string;
  Icon?: ComponentType<any>; // icône optionnelle
  iconName?: string; // nom de l'icône
  iconSize?: number;
  iconColor?: string;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  Icon,
  iconName,
  iconSize = 18,
  iconColor = "#fff",
  ...props
}) => {
  return (
    <TouchableOpacity
      className="bg-slate-900 py-3 rounded-xl shadow-lg flex-row justify-center items-center gap-2"
      {...props}
    >
      <Text className="text-white font-bold">{title}</Text>
      {Icon && iconName && <Icon name={iconName} size={iconSize} color={iconColor} />}
    </TouchableOpacity>
  );
};
