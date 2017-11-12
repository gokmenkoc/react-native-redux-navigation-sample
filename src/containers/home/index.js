import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../../actions'

import Counter from '../../components/counter';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Hi!'
  };
  render() {
    return (
      <View>
        <Counter {...this.props}/>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
      counter: state.counter
  };
}

//export default HomeScreen;
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
