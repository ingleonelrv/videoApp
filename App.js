import React, {Component} from 'react';
import {Text, View} from 'react-native';
import API from './utils/util'
//IMPORT mi Screen Home
import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import Video from 'react-native-video'

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: []
  }
  async componentDidMount(){
    const movies = await API.getSuggestions(10);
    const categories = await API.getMovies();
    console.log(movies)
    console.log(categories)
    this.setState({
      suggestionList: movies,
      categoryList: categories
    });
  }
  render() {
    return (
      <Home>
        <Header>
          <Text>Hola</Text>
        </Header>
        <View style={{flex:1, height:100}}>
          <Video
            source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={{position:"absolute",left:0, right:0, top:0, bottom:0}}
          />
        </View>
        <Text>Buscador</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}