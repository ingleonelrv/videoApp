import React from 'react'
import {View, Text} from 'react-native'

const leftPad = n => `0${n}`.substr(-2)

function formattedTime(secs){
    const minutes = parseInt(secs/60,10)
    const seconds = parseInt(secs%60, 10)
    return `${leftPad(minutes)} : ${leftPad(seconds)}`
}

function Timer(props){
    return(
        <View >
            <Text>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</Text>
        </View>
    )
}
export default Timer