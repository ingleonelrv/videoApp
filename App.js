import React, {Component} from 'react';
import {Text} from 'react-native';
//IMPORT mi Screen Home
import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'

type Props = {};
export default class App extends Component<Props> {
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