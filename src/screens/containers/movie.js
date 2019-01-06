import React, { Component } from 'react'

//IMPORT Components
import MovieLayout from '../components/movie-layout'
import Player from '../../player/containers/player'
import Header from '../../sections/components/header'

class Movie extends Component {
  render() {
    return (
      <MovieLayout>
          <Header />
          <Player />
      </MovieLayout>
    )
  }
}
export default Movie
