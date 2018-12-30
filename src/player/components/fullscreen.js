import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native'

function FullScreen(props){
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
            <Text style={styles.button}>Full</Text>
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