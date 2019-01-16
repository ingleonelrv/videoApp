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
import {connect} from 'react-redux'
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
  handleLogout=()=>{
    this.props.dispatch({
      type:'REMOVE_USER',
    })
    this.props.navigation.navigate('LoadingScreen');
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{this.props.user}</Text>
        <Button
          title="Cerrar sesión"
          color="#67a52e"
          onPress={this.handleLogout}
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
function mapStateToProps(state){
  //como solo hay un reducer accedo directo al key
  return{
    user:state.username
  }
}

export default connect(mapStateToProps) (Profile)