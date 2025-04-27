import { View, Text, TextInput } from "react-native";
import { commonStyles } from "@/styles/common.style";
import { windowHeight, windowWidth } from "@/Themes/app.constant";
import { external } from "@/styles/external.style";
import styles from "@/screens/login/styles";
import color from "@/Themes/app.colors";
import SelectInput from "../common/select-input";
import { countryItems } from "@/config/country-list";
import React from "react";

interface Props {
  width?: number;
  phone_number: string;
  setphone_number: (phone_number: string) => void;
  countryCode: string;
  setCountryCode: (countryCode: string) => void;
}

export default function PhoneNumberInput({
  width,
  phone_number,
  setphone_number,
  countryCode,
  setCountryCode
}: Props) {
  return (
    <View>
      <Text
        style={[commonStyles.mediumTextBlack, { marginTop: windowHeight(8) }]}
      >
        Phone Number
      </Text>

      <View
        style={[
          external.fd_row,
          external.ai_center,
          external.mt_10,
          { flexDirection: "row" },
        ]}
      >
        <View
          style={[
            styles.countryCodeContainer,
            {
              borderColor: color.border,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: color.lightGray,
              height: windowHeight(40),
              paddingHorizontal: windowWidth(12),
              borderWidth: 1,
              borderRadius: 5,
              marginRight: windowWidth(10),
              minWidth: windowWidth(65),
            },
          ]}
        >
          <Text style={{ paddingHorizontal: 10, color: "#000" }}>+91</Text>
        </View>

        <View
          style={[
            styles.phoneNumberInput,
            {
              width: width || windowWidth(346),
              borderColor: color.border,
            },
          ]}
        >
          <TextInput
            style={[commonStyles.regularText]}
            placeholderTextColor={color.subtitle}
            placeholder="Enter your number"
            keyboardType="numeric"
            value={phone_number}
            onChangeText={setphone_number}
            maxLength={10}
          />
        </View>
      </View>
    </View>
  );
}
