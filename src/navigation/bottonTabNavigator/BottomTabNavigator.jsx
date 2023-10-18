// import CartNavigator from "../CartNavigator";
// import OrdersNavigator from "../OrdersNavigator";
// import StackNavigator from "../StackNavigator";
// import { UserProfile } from "../../screens";
// import Feather from "@expo/vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { UserAvatar } from "../../components";
import { colors } from "../../constants/colors";
import { Text, View } from "react-native";
import { Home, UserProfile, Orders } from "../../screens";
// import { useSelector } from "react-redux";
import styles from "./bottomTabNavigator.style";
import Feather from "@expo/vector-icons/Feather";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  // const counter = useSelector((state) => state.cart.items.length);
  // const { user } = useSelector((state) => state.auth);
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.tabBar.iconContainer : null}>
              <Feather name="home" size={24} color={colors.white} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.tabBar.iconContainer : null}>
              <Feather name="list" size={24} color={colors.white} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.tabBar.iconContainer : null}>
              <Feather name="user" size={24} color={colors.white} />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
