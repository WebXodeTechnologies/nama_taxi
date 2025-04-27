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
  const toast = useToast();
  

  const handleSubmit = async() => {
    if (phone_number === "" || countryCode === ""){
      toast.show("please fill the Fields!", {placement:"bottom"});
    } else {
      const phoneNumber = `${countryCode}${phone_number}`
      await axios.post(`${process.env.EXPO_PUBLIC_SERVER_URI}/registration`, {phone_number : phoneNumber}).then((res)=> {
        router.push({pathname:"/(routes)/otp-verification" , params: {phoneNumber}})
      }).catch((error)=>{
        console.log(error);
        toast.show("something went wrong, please recheck the details", {type:"danger",placement:"bottom"});
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
