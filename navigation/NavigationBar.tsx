import { View, Text, Platform } from 'react-native';
import React from 'react';
import {
    SimpleLineIcons,
    Fontisto,
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Chat, Lainnya, Setting } from '../screen';

const Tab = createBottomTabNavigator();


const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        backgroundColor: 'white',
    }
} as const;

const NavigationBar: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={24}
                            color={focused ? 'black' : 'black'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Chat'
                component={Chat}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'chat' : 'chat-outline'}
                            size={24}
                            color={focused ? 'black' : 'black'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Lainnya'
                component={Lainnya}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'grid' : 'grid-outline'}
                            size={24}
                            color={focused ? 'black' : 'black'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Setting'
                component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'settings' : 'settings-outline'}
                            size={24}
                            color={focused ? 'black' : 'black'}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default NavigationBar;
