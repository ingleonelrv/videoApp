import React, {Component} from 'react';

////IMPORT mis pantallas
import AppLayout from './src/app'
import Loading from './src/sections/components/loading'
import Movie from './src/screens/containers/movie'
import Category from './src/screens/containers/category'
import About from './src/screens/containers/about'
import Profile from './src/screens/containers/profile'
import Lucky from './src/screens/containers/lucky'
import Login from './src/screens/containers/login'
import LoadingScreen from './src/screens/containers/loading'
import Icon from './src/sections/components/icon'

//REDUX
import {Provider} from 'react-redux'
import {store, persistor} from './store'
//redux-persist
import {PersistGate} from 'redux-persist/integration/react'

//react-navigation
// Importamos nuestro archivo anteriormente creado
import NavigationService from './src/navigation/navigation-service';
import {createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator, 
  createDrawerNavigator,
  createAppContainer} from 'react-navigation'


// Creamos un StackNavigator, el Navigator anteriormente mencionado (_navigator).
const TopLevelNavigator = createStackNavigator({ 
  // Recordatorio: AppLayout es nuestro componente principal y debe estar importado
  Home: AppLayout,
  //me llevo Movie hacia withModal
  Category
})
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: TopLevelNavigator,
      navigationOptions:{
        title: 'Inicio',
        tabBarIcon:<Icon icon='🏠' />
      }
    },
    About:{
      screen: About
    },
    Lucky:{
      screen:Lucky
    },
    Profile:{
      screen:Profile
    }
  },
  {
    tabBarOptions:{
      activeTintColor:'white',
      activeBackgroundColor:'#65a721'
    }
  }
)
const withModal = createStackNavigator({
    Main:{
      screen: TabNavigator
    },
    Movie: Movie,
  },
  {
    mode:'modal',
    headerMode:'none',
    navigationOptions:{
      gesturesEnabled: true,
    }
  }
)
//pone un menu a la izquierda
const DrawerNavigator=createDrawerNavigator(
  {
    Main:{
      screen:withModal
    },
    Sobre:{
      screen:About
    },
    Suerte:{
      screen:Lucky
    }
  },{
    //ancho del menu lateral
    drawerWidth:200,
    drawerBackgroundColor:'#f6f6f6',
    //opciones de los elementos del menu
    contentOptions:{
      activeBackgroundColor:'#7aba2f',
      activeTintColor:'white',
      inactiveTintColor:'#828282',
      inactiveBackgroundColor:'white',
      //cada elemento: 3
      itemStyle:{
        borderBottomWidth:.5,
        borderBottomColor: 'rgba(0,0,0,.5)'
      },
      //en Lucky puedo pasarle el: drawerIcon: <>
      //stylo al texto de cada item
      labelStyle:{
        marginHorizontal:0
      },
      iconContainerStyle:{
        marginHorizontal:5
      }
    }
  }
)
const SwitchNavigator = createSwitchNavigator({
    App: DrawerNavigator,
    Login: Login,
    LoadingScreen: LoadingScreen
  },{
    initialRouteName:'LoadingScreen'
  })
const AppNavigator= createAppContainer(SwitchNavigator)


type Props = {};
export default class App extends Component<Props> {
  render() {
    //Desactiva los warnings en el emulador
    console.disableYellowBox=true
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          {/* Llamamos a nustro StackNavigator (si, el Navigator retorna un componente) reemplazando nuestro AppLayout */}
          <AppNavigator
            // Le hacemos una referencia y se la mandamos a nuestro NavigationService 
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </PersistGate>
      </Provider>
    );
  }
}