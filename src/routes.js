import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FeatherIcon from 'react-native-vector-icons/Feather';

import Catalog from './Pages/Catalog';
import Cart from './Pages/Cart';
import Header from './Components/Header';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: {backgroundColor: '#313746'},
        }}
        initialRouteName="Catalog">
        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: () => <Header />,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerTitle: () => <Header />,
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
            headerBackImage: () => {
              <FeatherIcon name="chevron-left" size={24} color="#f3f9ff" />;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
