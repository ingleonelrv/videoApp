import React, {Component} from 'react';

////IMPORT mi Screen Principal
import AppLayout from './src/app'
import Loading from './src/sections/components/loading'
import Movie from './src/screens/containers/movie'
import Category from './src/screens/containers/category'

//REDUX
import {Provider} from 'react-redux'
import {store, persistor} from './store'
//redux-persist
import {PersistGate} from 'redux-persist/integration/react'

//react-navigation
// Importamos nuestro archivo anteriormente creado
import NavigationService from './src/navigation/navigation-service';
import {createStackNavigator, createAppContainer} from 'react-navigation'


// Creamos un StackNavigator, el Navigator anteriormente mencionado (_navigator).
const TopLevelNavigator = createStackNavigator({ 
  // Recordatorio: AppLayout es nuestro componente principal y debe estar importado
  Home: AppLayout,
  Movie: Movie,
  Category
})
const AppNavigator= createAppContainer(TopLevelNavigator)


type Props = {};
export default class App extends Component<Props> {
  
  render() {
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