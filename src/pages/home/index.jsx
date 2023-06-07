import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import IndexProfile from "../profile/IndexProfile";
import Favorite from "../favorite/Favorite";
import Home from "./Home"

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#3b5998",
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#3b5998" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerTitleAlign: "center",
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
          headerTitleAlign: "center",
        }}
      />

      <Tab.Screen
        name="IndexProfile"
        component={IndexProfile}
        options={() => ({
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          headerTitleAlign: "center",
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;