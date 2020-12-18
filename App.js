/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home';
import AddItem from './components/additem';


const Stack = createStackNavigator();

class App extends Component {

  render = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddItem" component={AddItem} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;
