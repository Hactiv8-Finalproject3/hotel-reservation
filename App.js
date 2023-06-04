import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {Ionicons} from '@expo/vector-icons'
import { Provider } from 'react-redux'
import { store } from './src/features';
import IndexHome  from './src/pages/home'
import Detail from './src/pages/detail/Detail'
import Booking from './src/pages/booking/Booking'
import Login from './src/pages/login/Login'

const HomeStack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack.Navigator
        initialRouteName='Index'
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#3f51b5' },
        }}
        >
          <HomeStack.Screen
            name='Index'
            component={IndexHome}
            options={() => ({
              headerShown: false,
            })}
          />

          <HomeStack.Screen
            name='Detail'
            component={Detail}
            options={() => ({
              headerShown: false,
            })}
          />

          <HomeStack.Screen
          name='Booking'
          component={Booking}
          options={({navigation}) => ({
            headerLeft: () => (
              <Ionicons
              name="arrow-back"
              color='#fff'
              size={30}
              style={{marginLeft: 10}}
              onPress={() => navigation.goBack()}
              />
            ),
          })}
          />

          <HomeStack.Screen
            name='Login'
            component={Login}
            options={() => ({
              headerShown: false,
            })}
          />

          </HomeStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
