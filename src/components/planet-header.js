import { View, StyleSheet, SafeAreaView, Pressable, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PlanetHeader({ backBtn, title = "NASA PLANETS" }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          style={{ marginRight: spacing[4] }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
      )}
      <Text preset="h2">{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
    flexDirection: "row",
    alignItems: "center",
  },
});
