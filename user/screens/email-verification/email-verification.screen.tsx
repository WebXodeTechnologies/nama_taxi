import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import AuthContainer from "@/utils/container/auth-container";
import { windowHeight } from "@/Themes/app.constant";
import SignInText from "@/components/login/signin.text";
import { style } from "../verification/style";
import color from "@/Themes/app.colors";
import { external } from "@/styles/external.style";
import Button from "@/components/common/button";
import { commonStyles } from "@/styles/common.style";
import { Toast, useToast } from "react-native-toast-notifications";
import OTPTextInput from "react-native-otp-textinput";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EmailVerificationScreen() {
  const [otp, setOtp] = useState("");
  const [loader, setLoader] = useState(false);
  const toast = useToast();
  const { user } = useLocalSearchParams() as any;
  const parsedUser = JSON.parse(user);
  console.log(parsedUser);

  
  const handleSubmit = async () => {
    const otpNumbers = `${otp}`;
  
    try {
      const res = await axios.put(`${process.env.EXPO_PUBLIC_SERVER_URI}/email-otp-verify`, {
        token: parsedUser.token,
        otp: otpNumbers,
      });
  
      console.log("Response:", res.data);
      await AsyncStorage.setItem('accessToken', res.data.accessToken);
    } catch (error: any) {
      console.log("Error:", error.message);
      Toast.show(error.message, { placement: "bottom", type: "danger" });
    }
  };
  
  
  return (
    <AuthContainer
      topSpace={windowHeight(240)}
      imageShow={true}
      container={
        <View>
          <SignInText
            title={"Email Verification"}
            subtitle={"Check your email address for the otp!"}
          />
          <OTPTextInput
            handleTextChange={(code) => setOtp(code)}
            inputCount={4}
            textInputStyle={style.otpTextInput}
            tintColor={color.subtitle}
            autoFocus={false}
          />
          <View style={[external.mt_30]}>
            <Button
              title="Verify"
              onPress={() => handleSubmit()}
              disabled={loader}
            />
          </View>
          <View style={[external.mb_15]}>
            <View
              style={[
                external.pt_10,
                external.Pb_10,
                { flexDirection: "row", gap: 5, justifyContent: "center" },
              ]}
            >
              <Text style={[commonStyles.regularText]}>Not Received yet?</Text>
              <TouchableOpacity>
                <Text style={[style.signUpText, { color: "#000" }]}>
                  Resend it
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
    />
  );
}
