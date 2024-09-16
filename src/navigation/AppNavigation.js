
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import User from '../screens/User'
import Adduser from '../screens/Adduser'
const Stack= createStackNavigator()
const AppNavigation = () => {
  return (
   
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name= 'User' component={User} />
            <Stack.Screen name= 'Adduser' component={Adduser} />
           
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default AppNavigation