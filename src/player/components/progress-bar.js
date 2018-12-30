import React from 'react'
import { Slider, View, StyleSheet } from 'react-native'

function ProgressBar(props) {
    return (
      <View style={styles.container}>
        <Slider
            minimumValue={0} 
            maximunValue={props.duration}
            value={props.currentTime}
            set={props.setProgressRef}
        />
      </View>
    )
}
const styles = StyleSheet.create({
  container:{
      width: '50%'
  }
})

export default ProgressBar
