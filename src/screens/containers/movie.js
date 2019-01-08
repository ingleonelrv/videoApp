import React, { Component } from 'react'
import {connect} from 'react-redux'

//IMPORT Components
import MovieLayout from '../components/movie-layout'
import Player from '../../player/containers/player'
import Header from '../../sections/components/header'
import Close from '../../sections/components/close'
import Details from '../../videos/components/details'

class Movie extends Component {
  //en SuggestionList seteo la pelicula seleccionada al store, aqui la borro
  videoClose = () =>{
    this.props.dispatch({
      type:'SET_SELECTED_MOVIE',
      payload:{
          movie: null
      }
    })
  }
  render() {
    return (
      <MovieLayout>
          <Header>
            <Close onPress={this.videoClose} />
          </Header>
          <Player />
          <Details {...this.props.movie} />
      </MovieLayout>
    )
  }
}
function mapStateToProps(state){
  return {
    movie: state.selectedMovie
  }
}
export default connect(mapStateToProps)(Movie)