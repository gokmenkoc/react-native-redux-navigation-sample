import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';

import LoginScreen from '../containers/login';
import HomeScreen from '../containers/home';

const MainStackRouter = StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    Home: { screen: HomeScreen }
});

export default MainStackRouter;
