import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/components/Home';
import DetailsScreen from '@/components/Details';
import SettingsScreen from '@/components/Settings';


type TabParamList = {
    Home: undefined;
    Details: undefined;
    Settings: undefined;
};


const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Details' component={DetailsScreen}/>
            <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator;