import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar
} from 'react-native';
import Icon from '../../sections/components/icon'

class Profile extends Component {
  static navigationOptions = ({ nav }) => {
    return {
      title: 'Perfil',
      tabBarIcon:<Icon icon='🙎‍' />
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
      <SafeAreaView style={styles.container}>
        <Text>Nombre de usuario</Text>
        <Button
          title="Cerrar sesión"
          color="#67a52e"
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})


export default Profile