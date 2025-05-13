import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { windowHeight, windowWidth } from "@/Themes/app.constant";
import { Image } from "react-native";
import TitleView from "@/components/signup/title.view";
import Images from "@/utils/images";
import Input from "@/components/common/input";
import Button from "@/components/common/button";
import color from "@/Themes/app.colors";
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import { Toast } from "react-native-toast-notifications";

export default function RegistrationScreen() {
  const [emailFormatWarning, setEmailFormatWarning] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const {user} = useLocalSearchParams() as any;
  const parsedUser = JSON.parse(user);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const [loading ,setLoading] = useState(false);
  const { colors } = useTheme();

  const handleChange = (key: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async() => {
    setLoading(true);
    if (!formData.name || !formData.email) {
      setShowWarning(true);
      Toast.show("Please fill all fields.", { type: "danger" });
      return;
    }
   
    await axios.post(`${process.env.EXPO_PUBLIC_SERVER_URI}/email-otp-request`, {email:formData.email,name:formData?.name, userId:parsedUser.id})
    .then((res)=> {
      setLoading(false);
      const userData = {
        id: parsedUser.id,
        name: formData.name,
        email: formData.email,
        PhoneNumber: parsedUser.phoneNumber,
        token: res.data.token,
      };
      router.push({pathname:"/(routes)/email-verification",params:{user:JSON.stringify(userData)}})
      console.log(res);
    }).catch((error) => {
      setLoading(false);
      console.log(error)
    })
  };

  return (
    <ScrollView>
      <View>
        {/* Logo */}
        <Image
          source={Images.logo}
          style={{
            width: windowHeight(200),
            height: windowHeight(100),
            alignSelf: "center",
            marginTop: windowHeight(50),
            resizeMode: "contain",
          }}
        />
        <View style={{ padding: windowHeight(20) }}>
          <View
            style={[styles.subView, { backgroundColor: colors.background }]}
          >
            <View style={styles.space}>
              <TitleView
                title={"Create your account"}
                subTitle="Complete the registration"
              />
              <Input
                title="Name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChangeText={(text) => handleChange("name", text)}
                showWarning={showWarning && formData.name === ""}
                warning={"Please Enter Your Name!"}
              />
              <Input
                title="Phone Number"
                placeholder="phoneNumber"
                value={parsedUser?.phoneNumber}
                disabled={true}
              />
              <Input
                title="Email"
                placeholder="Enter Your Email"
                keyboardType="email-address"
                value={formData.email}
                onChangeText={(text) => handleChange("email", text)}
                showWarning={
                  (showWarning && formData.name === "") ||
                  emailFormatWarning !== ""
                }
                warning={
                  emailFormatWarning !== ""
                    ? "Please Enter Your email"
                    : "please Enter your Valid Email"
                }
                emailFormatWarning={emailFormatWarning}
              />
              <View style={styles.margin}>
                <Button
                  title="Next"
                  backgroundColor={color.buttonBg}
                  textColor={color.whiteColor}
                  onPress={() => handleSubmit()}
                  disabled = {loading}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  subView: {
    height: "100%",
  },
  space: {
    marginHorizontal: windowWidth(4),
  },
  margin: {
    marginVertical: windowHeight(12),
  },
});
