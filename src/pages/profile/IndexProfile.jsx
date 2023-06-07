import { createNativeStackNavigator } from '@react-navigation/native-stack';
import profile from './profile';
import setting from './setting';
import { Ionicons } from '@expo/vector-icons';

const ProfileStack = createNativeStackNavigator()

const IndexProfile = () => {
    return (
        <ProfileStack.Navigator
            initialRouteName='Profile'
            screenOptions={{
                tabBarActiveTintColor: '#00008B',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#00008B',
                },
            }}>
            <ProfileStack.Screen
                name='profile'
                component={profile}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Ionicons
                            name="arrow-back"
                            color='#fff'
                            size={30}
                            style={{ marginRight: 10 }}
                            onPress={() => navigation.goBack()}
                        />
                    ),
                })}
            />
            <ProfileStack.Screen
                name='setting'
                component={setting}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Ionicons
                            name="arrow-back"
                            color='#fff'
                            size={30}
                            style={{ marginRight: 10 }}
                            onPress={() => navigation.goBack()}
                        />
                    ),
                })}
            />
        </ProfileStack.Navigator>
    )
}

export default IndexProfile;