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
import Movie from './screens/containers/movie'
import Search from './sections/containers/search'

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
    if(this.props.selectedMovie){
      return <Movie />
    }
    return (
      <Home>
          <Header />
          <Search />
          <CategoryList/>
          <SuggestionList/>
      </Home>
    )
  }
}
function mapStateToProps(state,props){
  return{
    selectedMovie: state.selectedMovie
  }
}
export default connect(mapStateToProps)(AppLayout)