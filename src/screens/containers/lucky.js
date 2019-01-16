import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Search from '../../sections/containers/search';
import Icon from '../../sections/components/icon'

class Lucky extends Component {
  static navigationOptions = ({ nav }) => {
    return {
      title: 'Suerte',
      tabBarIcon:<Icon icon='☘' />
    }
  }
  render() {
    return (
      <View>
        <Text>🍀</Text>
        <Search />
      </View>
    )
  }
}
export default Lucky