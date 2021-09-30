
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Transaction from '../screens/transaction';
import Search from '../screens/search';
import { NavigationContainer } from '@react-navigation/native';

const Tab= createBottomTabNavigator()
export default class BottomTabNavigator extends React.Component {
    render() {
        return (
           <NavigationContainer>
                <Tab.Navigator tabBarOptions={{ activeTintColor: 'blue', inactiveTintColor: 'white', style:{backgroundColor:'gray',}}}>
                    <Tab.Screen name="transaction" component={Transaction} />
                    <Tab.Screen name="search" component={Search} />

                </Tab.Navigator>
           </NavigationContainer>
           
        );
    }
}