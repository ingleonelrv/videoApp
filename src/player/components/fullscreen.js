import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Platform
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

function FullScreen(props){
    const expandIcon = Platform.select({
        ios: 'ios-expand',
        android: 'md-expand',
      })
    
      const contractIcon = Platform.select({
        ios: 'ios-contract',
        android: 'md-contract'
      })
    return(
        <TouchableOpacity 
            onPress={props.onPress} 
            style={styles.container}
            //coloca un rango alrededor del objeto para que reaccione al toque
            hitSlop={{
                top:5,
                right:5,
                left:5,
                bottom:5
            }}
            >
            <Icon name="md-expand" size={20} color="#E82943" />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:  {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container:  {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginLeft: 10,
        marginVertical: 5,
    }
})
export default FullScreen