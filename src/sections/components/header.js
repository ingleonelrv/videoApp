import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native'

function Header(props){
    return(
        <View>
            {/* renderiza el contenido para que no salga en la barra de estado Iphone X */}
            <SafeAreaView>
                <View style={styles.container}>
                    <Image 
                        source={require('../../../assets/logo.png')} 
                        style={styles.logo}
                        />
                    {/* quiero que aparezca algo al lado del logo y eso vendra desde el padre */}
                    <View style={styles.right}>
                        {props.children}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}
//creo mis estilos, cada key es como una clase de css
//resizeMode equiparable a background-size y tiene= contain, stretch, repeat, center
//padding-paddingLeft-paddingRight-paddingTop-paddingBottom
//flex: 1 le indica + espacio
const styles = StyleSheet.create({
    logo:{
        width:80,
        height:26,
        resizeMode:'contain'
    },
    container:{
        padding:10,
        flexDirection:'row',
    },
    right:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    }
})
export default Header