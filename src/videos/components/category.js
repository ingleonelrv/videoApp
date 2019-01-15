import React from 'react'
import {TouchableOpacity, Text, ImageBackground,StyleSheet} from 'react-native'

function Category(props){
    return(
        <TouchableOpacity onPress={props.onCategoryPress}>
            <ImageBackground style={styles.wrapper} source={{uri:props.background_image}}>
                <Text style={styles.genre}>{props.genres[0]}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )  
}
const styles= StyleSheet.create({
    wrapper:{
        width:250,
        height:100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent:'center'
    },
    genre:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        //No funciona en Android
        textShadowColor: 'rgba(0,0,0,.75)',
        //mover la sombra
        textShadowOffset:{
            width:2,
            height:2
        },
        textShadowRadius:10
    }
})
export default Category