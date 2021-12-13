import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import Fullfilment from '../screens/Fullfilment';
import OrderManagement from '../screens/OrderManagement';
import Shipment from '../screens/Shipment';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Filter from '../../assets/filter.svg';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const width = Dimensions.get('window').width;

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: false,
        tabBarActiveTintColor: '#bda365',
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: 'none',
          flex: 1,
          width: width / 3,
          fontWeight: '400',
          fontFamily: 'DMSans-Regular',
        },
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#224e73',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 11,
        },
        tabBarIndicatorStyle: {backgroundColor: '#bda365'},
        tabBarBounces: true,
        tabBarAllowFontScaling: true,
        lazy: true,
      }}>
      <Tab.Screen name="Order Management" component={OrderManagement} />
      <Tab.Screen name="Fulfillment" component={Fullfilment} />
      <Tab.Screen name="Shipment" component={Shipment} />
    </Tab.Navigator>
  );
}

function MyTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Tabs}
        options={{
          headerShown: true,
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{
                  width: 30,
                  aspectRatio: 1,
                  borderRadius: 15,
                  backgroundColor: '#e8e8e8',
                  marginRight: '7%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Filter />
              </TouchableOpacity>
            );
          },
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: '#224e73',
            shadowColor: 'transparent',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '400',
            fontFamily: 'DMSans-Regular',
            fontSize: 16,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default MyTabs;
