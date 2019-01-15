import React, { Component } from 'react'
import {connect} from 'react-redux'

//IMPORT el API
import API from '../utils/util'

//IMPORT mi Screen Home
import Home from './screens/containers/home'
import Header from './sections/components/header'
import SuggestionList from './videos/containers/suggestion-list'
import CategoryList from './videos/containers/category-list'
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
  // Cambiamos el header por el que ya creamos nosotros
  static navigationOptions = ({ nav }) => {
    return {
      // Los paréntesis estan porque así podemos poner todo en más de una línea
      header: (
        <Header>
          
        </Header>
      )
    }
  }
  render() {
    // BORRAMOS el if para ver si mostrar Movies o Home
    return (
      <Home>
        <Search />
        <CategoryList/>
        <SuggestionList/>
      </Home>
    )
  }
}
export default connect(null)(AppLayout)
