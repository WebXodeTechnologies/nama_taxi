import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import AuthContainer from "@/utils/container/auth-container";
import { windowHeight } from "@/Themes/app.constant";
import SignInText from "@/components/login/signin.text";
import { commonStyles } from "@/styles/common.style";
import { external } from "@/styles/external.style";
import Button from "@/components/common/button";
import { style } from "../verification/style";
import color from "@/Themes/app.colors";
import { Toast } from "react-native-toast-notifications";
import OTPTextInput from "react-native-otp-textinput";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EmailVerificationScreen() {
  const [otp, setOtp] = useState("");
  const [loader, setLoader] = useState(false);
  const { user } = useLocalSearchParams() as any;
  const parsedUser = JSON.parse(user);


  const handleSubmit = async () => {
    setLoader(true);
    const otpNumbers = otp.trim();
    if (!otpNumbers || otpNumbers.length !== 4) {
      setLoader(false);
      Toast.show("Please enter a valid 4-digit OTP", {
        placement: "bottom",
        type: "danger",
      });
      return;
    }

    try {
      console.log("Sending OTP verification request:", {
        token: parsedUser.token,
        otp: otpNumbers,
        url: `${process.env.EXPO_PUBLIC_SERVER_URI}/email-otp-verify`,
      });

      const response = await axios.put(
        `${process.env.EXPO_PUBLIC_SERVER_URI}/email-otp-verify`,
        {
          token: parsedUser.token,
          otp: otpNumbers,
        }
      );

      console.log("OTP verification response:", response.data);

      setLoader(false);

      // Store access token
      try {
        await AsyncStorage.setItem("accessToken", response.data.accessToken);
        console.log("Access token stored, navigating to /(tabs)/home");
        router.replace("/(tabs)/home");
      } catch (storageError) {
        console.error("AsyncStorage error:", storageError);
        Toast.show("Failed to save access token", {
          placement: "bottom",
          type: "danger",
        });
      }
    } catch (error: any) {
      setLoader(false);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to verify OTP";
      Toast.show(errorMessage, {
        placement: "bottom",
        type: "danger",
      });
      console.error("OTP verification error:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
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