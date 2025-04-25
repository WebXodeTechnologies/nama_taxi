import { Redirect } from "expo-router";
import { useState } from "react";


export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Redirect href={!isLoggedIn ? "/(routes)/onboarding" : "/(tabs)/home"} />
  );
}
