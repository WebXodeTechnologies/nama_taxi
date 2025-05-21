import { View, Text, Pressable, StyleSheet } from "react-native";
import color from "@/Themes/app.colors";
import { Clock, Search } from "@/utils/icons";
import { windowHeight, windowWidth } from "@/Themes/app.constant";
import DownArrow from "@/assets/icons/downArrow";
import { router } from "expo-router";

export default function LocationSearchBar() {
  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push("/(routes)/rideplan")}
    >
      <View style={styles.leftSection}>
        <Search />
        <Text style={styles.placeholderText}>Where to?</Text>
      </View>
      <View style={styles.rightSection}>
        <Clock />
        <Text style={styles.nowText}>Now</Text>
        <DownArrow />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.lightGray,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: windowWidth(18),
    paddingVertical: windowHeight(12),
    borderRadius: windowWidth(10),
    marginHorizontal: windowWidth(10),
    marginTop: windowHeight(10),
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
    marginLeft: 10,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: windowWidth(10), 
    gap: 8,
  },
  nowText: {
    fontSize: windowHeight(12),
    fontWeight: "600",
    paddingHorizontal: 6,
    color: "#000",
  },
});
