import React, {Component} from 'react'
import {FlatList} from 'react-native'
import SuggestionListLayout from '../../videos/components/suggestion-list-layout'
import Empty from '../../videos/components/empty'
import VerticalSeparator from '../../videos/components/vertical-separator'
import Suggestion from '../../videos/components/suggestions'
//Redux
import {connect} from 'react-redux'

// Importamos nuestro NavigationService
import NavigationService from '../../navigation/navigation-service'

class SuggestionList extends Component{
    renderEmpty = () => <Empty text='No hay sugerencias en la lista' />
    itemSeparator = () => <VerticalSeparator />
    viewMovie =(item)=>{
        this.props.dispatch({
            type:'SET_SELECTED_MOVIE',
            payload:{
                movie:item
            }
        })
        // Agregamos la función para ir a Movie
        NavigationService.navigate('Movie')
    }
    renderItem = ({item}) =>{
        return(
            <Suggestion {...item} onPress={()=>{this.viewMovie(item)}} />
        )
    }
    keyExtractor = (item) => item.id.toString()
    render(){
        return(
            //navigation lo puedo usar como prop ya que es heredado desde el stackNavigation
            <SuggestionListLayout title={`${this.props.navigation.getParam('genre','Category')}`}>
                <FlatList 
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </SuggestionListLayout>
        )
    }
}
function mapStateToProps(state,props){
    return {
        list:state.suggestionList
    }
}
export default connect(mapStateToProps)(SuggestionList)