import React, {Component} from 'react';
import {Text, View} from 'react-native';
import API from './utils/util'
//IMPORT mi Screen Home
import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import Player from './src/player/containers/player'

//REDUX
import {Provider} from 'react-redux'
import store from './store'

type Props = {};
export default class App extends Component<Props> {
  async componentDidMount(){
    //hago la peticion y despacho la accion, un poco de UX
    const categoryList = await API.getMovies();
    store.dispatch({
      type:'SET_CATEGORY_LIST',
      payload:{
        categoryList
      }
    })
    const suggestionList = await API.getSuggestions(10);
    store.dispatch({
      type:'SET_SUGGESTION_LIST',
      payload:{
        suggestionList
      }
    })
  }
  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header>
            <Text>Hola</Text>
          </Header>
          <Player />
          <Text>Buscador</Text>
          <CategoryList/>
          <SuggestionList/>
        </Home>
      </Provider>
    );
  }
}