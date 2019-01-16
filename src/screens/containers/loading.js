import React, { Component } from 'react'
import LoadingComponent from '../../sections/components/loading'
import {connect} from 'react-redux'

class Loading extends Component {
    //cuando el componente se monte hacemos la validacion
    componentDidMount(){
        if(this.props.user){
            this.props.navigation.navigate('App')
        }else{
            this.props.navigation.navigate('Login')
        }
    }
    render() {
        return (
            <LoadingComponent />
        )
    }
}
//Conectamos con nuestro store para traer el usuario
function mapStateToProps(state){
    return{
        user: state.username
    }
}
export default connect(mapStateToProps) (Loading)
