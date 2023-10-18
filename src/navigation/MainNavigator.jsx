import React, { useEffect } from "react";

import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabNavigator from "./bottonTabNavigator/BottomTabNavigator";

const MainNavigator = () => {
  const user = true;

  return user ? <BottomTabNavigator /> : <AuthStackNavigator />;
};

export default MainNavigator;
