import React, { Component } from 'react'
import {connect} from 'react-redux'

//IMPORT Components
import MovieLayout from '../components/movie-layout'
import Player from '../../player/containers/player'
import Header from '../../sections/components/header'
import Close from '../../sections/components/close'
import Details from '../../videos/components/details'

//React Native Animated
import {Animated} from 'react-native'

// Importamos nuestro NavigationService
import NavigationService from '../../navigation/navigation-service'

class Movie extends Component {
  state={
    opacity:new Animated.Value(0)
  }
  //ELIMINO el metodo videoClose (que quitaba del state selectedMovie)

  componentDidMount(){
    //el primer parametro que recibe tiene que ser una instancia de algo que se pueda animar
    //como segundo parametro{a que valor, en que tiempo}
    Animated.timing(this.state.opacity,{
      toValue:1,
      duration:1000
    }).start();
  }
  // Cambiamos el header de igual forma que en 'app.js'
  static navigationOptions = ({ nav }) => {
    return {
      header: (
        <Header>
          <Close
            // Cambiamos el llamado a la función de volver antigua por la del NavigationService
            onPress={NavigationService.back}
          />
        </Header>
      )
    }
  }
  render() {
    return (
      <Animated.View style={{flex:1,opacity:this.state.opacity}}>
        <MovieLayout>
            <Player />
            <Details {...this.props.movie} />
        </MovieLayout>
      </Animated.View>
    )
  }
}
function mapStateToProps(state){
  return {
    movie: state.selectedMovie
  }
}
export default connect(mapStateToProps)(Movie)
