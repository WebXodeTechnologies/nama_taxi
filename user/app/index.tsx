import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("accessToken");
        if (accessToken) {
          setisLoggedIn(true);
        } else {
          setisLoggedIn(false);
        }
      } catch (error) {
        console.log("Failed to retrieve accessToken", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    getData();
    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <Redirect href={!isLoggedIn ? "/(routes)/onboarding" : "/(tabs)/home"} />
  );
}
