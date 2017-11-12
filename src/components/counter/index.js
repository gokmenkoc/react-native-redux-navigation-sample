import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../../actions'

const styles = StyleSheet.create({
    button: {
        width: 30,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        flex: 0.1,
        
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    text:{
        marginTop: 10,
        paddingRight: 50
    }
});

const Counter = ({ counter, increment, decrement }) => {
    debugger;
    return (
        <View style={{ alignItems: 'center', padding: 5 }}>
            <View style={styles.buttonContainer}>
                <Text style={styles.text}>Counter: {counter.count}</Text>
                <TouchableOpacity onPress={increment} style={styles.button}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={decrement} style={styles.button}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(ActionCreators, dispatch);
// }

// function mapStateToProps(state) {
//     return {
//         counter: state.counter
//     };
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
