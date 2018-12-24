import React, {Component} from 'react'
import {FlatList, Text} from 'react-native'
import SuggestionListLayout from '../components/suggestion-list-layout'

class SuggestionList extends Component{
    render(){
        //temporalmente creo un array de datos para la lista
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
                    renderItem={({item})=> <Text>{item.title}</Text>}
                />
            </SuggestionListLayout>
        )
    }
}
export default SuggestionList