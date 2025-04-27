import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import AuthContainer from "@/utils/container/auth-container";
import { windowHeight } from "@/Themes/app.constant";
import styles from "./styles";
import Images from "@/utils/images";
import SignInText from "@/components/login/signin.text";
import { external } from "@/styles/external.style";
import PhoneNumberInput from "@/components/login/phone-number.input";
import Button from "@/components/common/button";
import { router } from "expo-router";
import { Toast, useToast } from "react-native-toast-notifications";
import axios from "axios";

export default function LoginScreen() {
  const [phone_number, setphone_number] = useState("");
  const [countryCode, setCountryCode] = useState("+91");


  const handleSubmit = async() => {
    if (phone_number === "" || countryCode === ""){
      Toast.show("please fill the Fields!", {placement:"bottom"});
    } else {
      const phoneNumber = `+${countryCode}${phone_number}`
      console.log(process.env.EXPO_PUBLIC_SERVER_URI);
      await axios.post(`${process.env.EXPO_PUBLIC_SERVER_URI}/registration`, {phone_number : phoneNumber}).then((res)=> {
        console.log(res);
      }).catch((error)=>{
        console.log(error);
      });
    };
  }

  return (
    <AuthContainer
      topSpace={windowHeight(150)}
      imageShow={true}
      container={
        <View>
          <View>
            <View>
              <Image style={styles.transformLine} source={Images.line} />
              <SignInText />
              <View style={[external.mt_25, external.Pb_10]}>
                <PhoneNumberInput
                  phone_number={phone_number}
                  setphone_number={setphone_number}
                  countryCode={countryCode}
                  setCountryCode={setCountryCode}
                />
                <View style={[external.mt_25, external.Pb_15]}>
                  <Button
                    title="Get OTP"
                    onPress={()=> handleSubmit()}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      }
    />
  );
}
