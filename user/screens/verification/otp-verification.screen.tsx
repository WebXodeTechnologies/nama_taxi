import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AuthContainer from "@/utils/container/auth-container";
import { windowHeight } from "@/Themes/app.constant";
import SignInText from "@/components/login/signin.text";
import OTPTextInput from "react-native-otp-textinput";
import { style } from "./style";
import color from "@/Themes/app.colors";
import { external } from "@/styles/external.style";
import Button from "@/components/common/button";
import { router, useLocalSearchParams } from "expo-router";
import { commonStyles } from "@/styles/common.style";
import { useToast } from "react-native-toast-notifications";
import axios,{AxiosError} from "axios";

export default function OtpVerificationScreen() {

  const [otp,setOtp] = useState('');
  const [loader,setLoader] = useState(false);
  const toast = useToast(); 
  const {phoneNumber} = useLocalSearchParams();


  const handleSubmit = async () => {
    if (otp === '') {
      toast.show("Please fill the OTP field!", { placement: "bottom" });
      return;
    }
  
    setLoader(true);
    console.log("Verifying OTP for:", phoneNumber, "OTP:", otp);
  
    try {
      const res = await axios.post(`${process.env.EXPO_PUBLIC_SERVER_URI}/verify-otp`, {
        phone_number: phoneNumber,
        otp: otp,
      });
  
      console.log("Server response:", res.data);
  
      const user = res.data.user;
      if (!user) {
        toast.show("Invalid response from server", { type: "danger" });
        return;
      }
  
      toast.show("Account Verified!");
  
      if (user.email === null) {
        console.log("Redirecting to registration with user:", user);
        router.push({
          pathname: "/(routes)/registration",
          params: { user: JSON.stringify(user) },
        });
      } else {
        router.push("/(tabs)/home");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("OTP Verification error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    
      toast.show("Something went wrong. Please recheck the details.", {
        type: "danger",
        placement: "bottom",
      });
    }finally {
      setLoader(false);
    }
  };
  
 

  return (
    <AuthContainer
      topSpace={windowHeight(240)}
      imageShow={true}
      container={
        <View>
          <SignInText
            title={"OTP Verification"}
            subtitle={"Check your phone for the otp!"}
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