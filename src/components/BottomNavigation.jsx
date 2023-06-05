import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import IndexHome from "../pages/home/index";
import IndexProfile from "../pages/profile/IndexProfile";
import Home from "../pages/home/Home";

const Tab = createBottomTabNavigator();

export default BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="IndexHome"
      screenOptions={{
        tabBarActiveTintColor: "#3b5998",
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#3b5998" },
      }}
    >
        <Tab.Screen
            name="IndexHome"
            component={IndexHome}
            options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        name="home"
                        color={color}
                        size={size}
                    />
                ),
                headerTitleAlign: "center",    
            }}
        />

        <Tab.Screen
        name ="Favorite"
        component={Home}
        options={{
            tabBarLabel: "Favorite",
            tabBarIcon: ({ color, size }) => (
                <Ionicons
                    name="heart"
                    color={color}
                    size={size}
                />
            ),
            headerTitleAlign: "center",    
        }}
        />

        <Tab.Screen
        name="IndexProfile"
        component={IndexProfile}
        options={({navigaion}) => ({
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
                <Ionicons
                    name="person"
                    color={color}
                    size={size}
                />
            ),
            headerLeft: () => (
                <Ionicons name="arrow-back" color="white" size={25} style={{marginLeft: 20}} onPress={() => navigaion.goBack()} />
            ),    
        })}
        />

    </Tab.Navigator>
  );
};
