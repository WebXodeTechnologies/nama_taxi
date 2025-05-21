import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

export default function RidePlanScreen() {
  const [places, setPlaces] = useState<any>([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState({
  latitude: 11.219862661012304,
  longitude: 78.16772067727877,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
});
  const [marker, setMarker] = useState<any>(null);
  const [currentLocation, setCurrentLocation] = useState<any>(null);
  const [distance, setDistance] = useState<any>(null);
  const [locationSelected, setLocationSelected] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("car");
  const [travelTimes, setTravelTimes] = useState({
    driving: null,
    walking: null,
    bicycling: null,
    transit: null,
  });
  const [keyboardAvoidingHeight, setKeyboardAvoidingHeight] = useState(false);
  return (
    <View>
      <Text>RidePlanScreen</Text>
    </View>
  );
}
