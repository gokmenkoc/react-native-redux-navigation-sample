import React from 'react';
import {Constants} from 'expo';
import { View, Text, Button } from 'react-native';

class LoginScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={{paddingTop: Constants.statusBarHeight + 6, paddingBottom:10, textAlign: 'center'}}>Welcome To My Counter App</Text>
                <Button
                    title="Go To Counter Page"
                    onPress={()=>{
                        navigate('Home');
                    }}
                >
                </Button>
            </View>
        );
    }
}

export default LoginScreen;
