import React, { Component } from 'react'
import {StyleSheet, ActivityIndicator, Text } from 'react-native'
import Video from 'react-native-video'
import VideoLayout from '../components/video-layout'
import ControlsLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import ProgressBar from '../components/progress-bar'
import Timer from '../components/timer'
import FullScreen from '../components/fullscreen'

class Player extends Component {
    //creo un estado loadring:true porque el video siempre inicia cargando
    state={
        loading:true,
        paused: false,
        currentTime:0,
        duration:0,
        currentTimeFormatted:0,
        fullscreen: false
    }
    //onBuffer recibe un objeto y este objeto tiene un metodo que devuelve un booleano
    onBuffer = ({isBuffering}) =>{
        //seteo el state con lo que me diga isBuffering
        this.setState({
            loading:isBuffering
        })
    }
    playpause = () =>{
        this.setState({
            paused: !this.state.paused
        })
    }
    // playPause = () => {
    //     this.setState((oldState, oldProps) => {
    //         return {
    //             paused: !oldState.paused
    //         }
    //     })
    // }
    onVideoLoad=(event)=>{
        this.setState({
            duration: event.duration
        })
    }
    onVideoProgress = (event) =>{
        this.setState({
            currentTime:event.currentTime,
            currentTimeFormatted:(this.state.currentTime/this.state.duration)
        })
    }
    fullScreenMode =()=>{
        this.setState({
            fullscreen: !this.state.fullscreen
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
                        onLoad={this.onVideoLoad}
                        onProgress={this.onVideoProgress}
                        paused={this.state.paused}
                        fullscreen={this.state.fullscreen}
                        ref={this.setVideoRef}
                    />
                }
                loader={
                    <ActivityIndicator color='red' />
                }
                controls={
                    <ControlsLayout>
                        <PlayPause onPress={this.playpause} paused={this.state.paused} />
                        <ProgressBar 
                            duration={this.state.duration} 
                            currentTime={this.state.currentTimeFormatted}
                            setProgressRef={this.setProgressRef} />
                        <Timer currentTime={this.state.currentTime} duration={this.state.duration} />
                        <FullScreen onPress={this.fullScreenMode} />
                    </ControlsLayout>
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