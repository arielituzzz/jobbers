import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Signup, Login } from "../screens";
import { View, Pressable } from "react-native";
// import { Header } from "../components";
import AntDesing from "@expo/vector-icons/AntDesign";
import { colors } from "../constants/colors";

const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      // screenOptions={({ route, navigation }) => ({
      //   headerShown: true,
      //   header: () => (
      //     <View style={{ flexDirection: "row", marginTop: 50 }}>
      //       {route.name !== "Home" ? (
      //         <Pressable
      //           onPress={() => navigation.goBack()}
      //           style={{
      //             backgroundColor: colors.blueLight,
      //             justifyContent: "center",
      //           }}
      //         >
      //           <AntDesing name="back" size={25} color={"black"} />
      //         </Pressable>
      //       ) : null}
      //       <Header title={route.name} />
      //       {/* <Header title={route.name === "Home" ? "Home" : "Other Title"} /> */}
      //     </View>
      //   ),
      // }
      // )}
    >
      <AuthStack.Screen name="SignUp" component={Signup} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
