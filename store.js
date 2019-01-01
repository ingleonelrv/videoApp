import {createStore} from 'redux'
import reducer from './src/reducers/videos'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

// const store = createStore(reducer, {
//     categoryList:[],
//     suggestionList:[]
// })

const persistConfig = {
    key: 'root',
    storage,
}

//tomamos el(index) reducer y sacamos de ahi otro pero Configurado con persistReducer asi cada cambio que se haga al
//reducer llamara a las funciones de persist para guardar cache
const persistedReducer = persistReducer(persistConfig, reducer)

//creamos el store con el nuevo reducer, persistido (cacheado)
const store = createStore(persistedReducer)
//el persistor hara posible la validacion del store, si tengo store persistido usar ese sino actualizar de la red
const persistor = persistStore(store)

export {store, persistor}