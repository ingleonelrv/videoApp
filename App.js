import React, {Component} from 'react';
import {Text} from 'react-native';
//IMPORT mi Screen Home
import Home from './src/screens/containers/home'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Text>Header</Text>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <Text>Sugerencias</Text>
      </Home>
    );
  }
}