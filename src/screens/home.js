import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import NasaInformation from "./nasaInformation";
import { SafeAreaView } from "react-native-safe-area-context";

// --------------------------------------------------------------------

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// ----------------------------------------------------------------------
// const PlanetItem = ({ item }) => {
//   const { name, color } = item;
//   const navigation = useNavigation();
//   return (
//     <Pressable
//       onPress={() => {
//         navigation.navigate("Details", { planet: item });
//       }}
//       style={styles.item}
//     >
//       <View style={{ flexDirection: "row", alignItems: "center" }}>
//         <View style={[styles.circle, { backgroundColor: color }]}></View>
//         <Text style={styles.itemName} preset="h4">
//           {name}
//         </Text>
//       </View>
//       <AntDesign name="right" size={16} color="white" />
//     </Pressable>
//   );
// };
// -----------------------------------------------------------------------
//---------------------------------------------------------------------------
export default function Home() {
  const [nasaInformations, setNasaInformations] = useState([]);
  const [loading, setLoading] = useState(true);
  const url =
    "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=qdd7D2loGgbEMlfMf0mGIXjbWID6K1KcseMwonxf";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNasaInformations(data.near_earth_objects))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.homeDesign}>
          Nasa Total Data : {nasaInformations.length}
        </Text>
        {loading ? (
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            <ActivityIndicator size="large" />
          </Text>
        ) : (
          nasaInformations.map((nasaInformation) => (
            <Text key={nasaInformation.id}>
              ID: {nasaInformation.id} Name: {nasaInformation.name}
            </Text>
          ))
        )}
      </View>
    </SafeAreaView>
  );
}

// for style-------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
  homeDesign: {
    marginTop: 30,
    color: "green",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },

  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },

  itemName: {
    marginLeft: 20,
    textTransform: "uppercase",
  },

  list: {
    padding: 20,
  },
  separator: {
    borderBottomColor: "white",
    borderWidth: 0.5,
  },
});
// <NasaInformation key={nasaInformation.id}></NasaInformation>
// {nasaInformation.id}
