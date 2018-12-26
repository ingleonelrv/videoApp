import React, {Component} from 'react';
import {Text} from 'react-native';
//IMPORT mi Screen Home
import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import API from './utils/util'

type Props = {};
export default class App extends Component<Props> {
  async componentDidMount(){
    const movies = await API.getSuggestions(10);
    console.log(movies);
  }
  render() {
    return (
      <Home>
        <Header>
          <Text>Hola</Text>
        </Header>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <SuggestionList />
      </Home>
    );
  }
}