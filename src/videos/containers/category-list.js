import React, {Component} from 'react'
import {View, FlatList} from 'react-native'

import Empty from '../components/empty'
import HorizontalSeparator from '../components/horizontal-separator'
import Category from '../components/category'
import CategoryListLayout from '../components/category-list-layout'
//REDUX
import {connect} from 'react-redux'

import NavigationService from '../../navigation/navigation-service'

class CategoryList extends Component{
    keyExtractor = (item) => item.id.toString()
    renderEmpty = () => <Empty text='No hay categorias en la lista' />
    itemSeparator = () => <HorizontalSeparator />
    renderItem = ({item}) =>{
        return(
            <Category {...item} onCategoryPress={()=>{this.viewCategory(item)}} />
        )
    }
    //Cuando clickee cambio de pantalla y le envio un parametro a esa pantalla
    viewCategory = (item) =>{
        NavigationService.navigate('Category', {genre: item.genres[0]})
    }
    render(){
        return(
            <CategoryListLayout title='Categorias'>
                <FlatList
                    horizontal
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </CategoryListLayout>
        )
    }
}
function mapStateToProps(state,props){
    // debugger
    //del estado global (store) tomo los datos y aqui se cosumen como propiedad data={this.props.list}
    return {
        list: state.categoryList
    }
}
export default connect(mapStateToProps)(CategoryList)