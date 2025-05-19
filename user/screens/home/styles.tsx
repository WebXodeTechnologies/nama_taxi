import { external } from "@/styles/external.style";
import color from "@/Themes/app.colors";
import { windowHeight } from "@/Themes/app.constant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: windowHeight(23),
  },
  containerStyle: {
    backgroundColor: color.lightGray,
    ...external.Pb_30,
  },
});

export default styles;