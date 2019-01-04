import React from 'react'
import {View,Text,StyleSheet, Image, ActivityIndicator} from 'react-native'

function Loading(props){
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo} />
            {/* componente nativo para indicar que algo esta cargando */}
            <ActivityIndicator />
        </View>
    )
}
const styles = StyleSheet.create({
  logo:{
    width:200,
    height:80,
    resizeMode:'contain',
    marginBottom:10,

  },
  container:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default Loading