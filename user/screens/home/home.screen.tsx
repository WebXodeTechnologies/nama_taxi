import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import styles from "./styles";
import { commonStyles } from "@/styles/common.style";
import { external } from "@/styles/external.style";
import LocationSearchBar from "@/components/location/location.search.bar";
import color from "@/Themes/app.colors";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Add logo import
const logo = require("@/assets/images/logo/cal.png"); // adjust path based on your structure

export default function HomeScreen() {
  return (
    <View style={[commonStyles.flexContainer, { backgroundColor: "#fff" }]}>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          {/* Company Logo */}
          <Image
            source={logo}
            style={{
              width: 200,
              height: 100,
              resizeMode: "contain",
            }}
          />
        </View>
        <LocationSearchBar />
      </SafeAreaView>
    </View>
  );
}
