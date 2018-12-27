import React, {Component} from 'react'
import {View, FlatList} from 'react-native'

import Empty from '../components/empty'
import HorizontalSeparator from '../components/horizontal-separator'
import Category from '../components/category'
import CategoryListLayout from '../components/category-list-layout'

class CategoryList extends Component{
    keyExtractor = (item) => item.id.toString()
    renderEmpty = () => <Empty text='No hay categorias en la lista' />
    itemSeparator = () => <HorizontalSeparator />
    renderItem = ({item}) =>{
        return(
            <Category {...item} />
        )
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
export default CategoryList