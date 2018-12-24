import React, {Component} from 'react'
import {FlatList, Text} from 'react-native'

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
            //Para que se renderice algo dentro de la lista utilizo otra propiedad renderItem = {funcion}
            <FlatList 
                data={list}
                renderItem={({item})=> <Text>{item.title}</Text>}
            />
        )
    }
}
export default SuggestionList