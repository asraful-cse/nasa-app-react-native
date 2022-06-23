import { StatusBar } from "expo-status-bar";
// ---------------------------------------------------------------------------
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/screens/home'
import Details from "./src/screens/details";



// ----------------------------------------------------------------------------
// copy to the native doc -----------------------------------------------------
const Stack = createNativeStackNavigator();
// ----------------------------------------------------------------------------

export default function App({navigation}) {


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}