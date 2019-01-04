import React, {Component} from 'react';

////IMPORT mi Screen Principal
import AppLayout from './src/app'

import Loading from './src/sections/components/loading'

//REDUX
import {Provider} from 'react-redux'
import {store, persistor} from './store'
//redux-persist
import {PersistGate} from 'redux-persist/integration/react'

type Props = {};
export default class App extends Component<Props> {
  
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}