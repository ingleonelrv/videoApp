import React, {Component} from 'react'
import {FlatList, Text} from 'react-native'
import SuggestionListLayout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import VerticalSeparator from '../components/vertical-separator'
import Suggestion from '../components/suggestions'

class SuggestionList extends Component{
    renderEmpty = () => <Empty text='No hay sugerencias en la lista' />
    itemSeparator = () => <VerticalSeparator />
    renderItem = ({item}) =>{
        return(
            <Suggestion {...item} />
        )
    }
    keyExtractor = (item) => item.id.toString()
    render(){
        return(
            <SuggestionListLayout title='Sugerencias para ti'>
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
export default SuggestionList