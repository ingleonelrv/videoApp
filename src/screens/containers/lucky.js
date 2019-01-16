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
  componentDidMount(){
    //asignamos el listener a una variable para poder desmontarlo luego
    this.focus=this.props.navigation.addListener('didFocus', ()=>{
      // Esto me cambia el texto del statusbar
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('white')
    })
  }
  componentWillUnmount(){
    this.focus.remove()
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