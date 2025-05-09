import { useTheme } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import fonts from "@/Themes/app.fonts";
import color from "@/Themes/app.colors";
import { fontSizes, windowHeight } from "@/Themes/app.constant";

interface TitleViewProps {
  title: string;
  subTitle: string;
}

export default function TitleView({ title, subTitle }: TitleViewProps) {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={[styles.main, { color: colors.text }]}>{title}</Text>
      <Text style={[styles.sub]}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    fontSize: fontSizes.FONT30,
    fontFamily: fonts.medium,
    marginTop: windowHeight(2),
  },
  sub: {
    color: color.secondaryFont,
    marginTop: windowHeight(0.6),
    fontSize: fontSizes.FONT20,
    fontFamily: fonts.medium,
    marginBottom: windowHeight(2),
  },
});