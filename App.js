import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { store } from './src/features';
import IndexHome  from './src/pages/Home'
import DetailHotel from './src/pages/detail/DetailHotel'
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
            name='DetailHotel'
            component={DetailHotel}
            options={() => ({
              headerShown: false,
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
