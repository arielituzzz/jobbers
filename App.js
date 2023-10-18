import { StatusBar } from "expo-status-bar";
import BottomTabNavigator from "./src/navigation/bottonTabNavigator/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
