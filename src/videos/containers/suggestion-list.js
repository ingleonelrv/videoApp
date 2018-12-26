import React, {Component} from 'react'
import {FlatList, Text} from 'react-native'
import SuggestionListLayout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import VerticalSeparator from '../components/vertical-separator'
import Suggestion from '../components/suggestions'

class SuggestionList extends Component{
    renderEmpty = () => <Empty text='No hay sugerencias en la lista' />
    itemSeparator = () => <VerticalSeparator color='red' />
    renderItem = ({item}) =>{
        return(
            <Suggestion {...item} />
        )
    }
    render(){
        //temporalmente creo un array de datos para la lista
        // const lista = []
        const list = [
            {
                title: 'Titulo A',
                key: '1'
            },
            {
                title: 'Titulo B',
                key: '2'
            }
        ]
        return(
            <SuggestionListLayout title='Sugerencias para ti'>
                <FlatList 
                    data={list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </SuggestionListLayout>
        )
    }
}
export default SuggestionList