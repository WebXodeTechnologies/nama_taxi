import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { commonStyles } from "@/styles/common.style";
import color from "@/Themes/app.colors";
import { windowHeight } from "@/Themes/app.constant";
import { external } from "@/styles/external.style";

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  width,
  backgroundColor,
  textColor,
  disabled,
}) => {
  const widthNumber = width || "100%";
  return (
    <Pressable
      style={[
        styles.container,
        {
          width: widthNumber,
          backgroundColor: backgroundColor || color.buttonBg,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          commonStyles.extraBold,
          { color: textColor || color.whiteColor },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.buttonBg,
    height: windowHeight(40),
    borderRadius: 6,
    ...external.ai_center,
    ...external.js_center,
  },
});

export default Button;
