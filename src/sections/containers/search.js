import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import {connect} from 'react-redux'

//Importo la API
import API from '../../../utils/util'

import NavigationService from '../../navigation/navigation-service'

class Search extends Component {
    state={
        text:''
    }
    //La funcion es async ya que hago una peticion que puede tardar
    handleSubmit = async ()=>{
        const movies = await API.searchMovie(this.state.text)
        this.props.dispatch({
            type:'SET_SELECTED_MOVIE',
            payload:{
                movie: movies[0]
            }
        })
        //podria usar un dispatch, importar NavigationActions y lanzar navigate pero ya tengo mi clase
        NavigationService.navigate('Movie')
    }
    handleChangeText = (text)=>{
        this.setState({
            text
        })
    }
    render() {
        return (
            <TextInput 
                placeholder='Busca tu pelicula favorita...'
                autoCorrect={false}
                autoCapitalize='none'
                onSubmitEditing={this.handleSubmit}
                onChangeText={this.handleChangeText}
                style={styles.input}
            />
        )
    }
}
const styles = StyleSheet.create({
  input:{
      padding:15,
      fontSize:15,
      borderWidth:1,
      borderColor: '#eaeaea'
  }
})
export default connect(null) (Search)
