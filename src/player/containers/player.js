import React, { Component } from 'react'
import {StyleSheet, ActivityIndicator } from 'react-native'
import Video from 'react-native-video'
import VideoLayout from '../components/video-layout'

class Player extends Component {
    //creo un estado loadring:true porque el video siempre inicia cargando
    state={
        loading:true
    }
    //onBuffer recibe un objeto y este objeto tiene un metodo que devuelve un booleano
    onBuffer = ({isBuffering}) =>{
        //seteo el state con lo que me diga isBuffering
        this.setState({
            loading:isBuffering
        })
    }
    render() {
        return (
            <VideoLayout
                //tambien paso el estado como propiedad al Layout
                loading={this.state.loading}
                video={
                    <Video
                        source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                        style={styles.video}
                        resizeMode='contain'
                        onBuffer={this.onBuffer}
                    />
                }
                loader={
                    <ActivityIndicator color='red' />
                }
            />
        )
    }
}
const styles = StyleSheet.create({
    video: {
        position:"absolute",
        left:0, 
        right:0, 
        top:0, 
        bottom:0
    }
})
export default Player