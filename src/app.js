import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {connect} from 'react-redux'

//IMPORT el API
import API from '../utils/util'

//IMPORT mi Screen Home
import Home from './screens/containers/home'
import Header from './sections/components/header'
import SuggestionList from './videos/containers/suggestion-list'
import CategoryList from './videos/containers/category-list'
import Player from './player/containers/player'

class AppLayout extends Component {
    async componentDidMount(){
        //hago la peticion y despacho la accion, un poco de UX
        const categoryList = await API.getMovies();
        this.props.dispatch({
          type:'SET_CATEGORY_LIST',
          payload:{
            categoryList
          }
        })
        const suggestionList = await API.getSuggestions(10);
        this.props.dispatch({
          type:'SET_SUGGESTION_LIST',
          payload:{
            suggestionList
          }
        })
    }
  render() {
    return (
        <Home>
            <Header>
              <Text>Hola</Text>
            </Header>
            <Player />
            <Text>Buscador</Text>
            <CategoryList/>
            <SuggestionList/>
        </Home>
    )
  }
}
//Aqui no necesito datos del store por tanto le paso null
export default connect(null)(AppLayout)
