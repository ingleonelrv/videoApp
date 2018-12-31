import {createStore} from 'redux'
import reducer from './src/reducers/videos'

const store = createStore(reducer, {
    video:'platzi'
})

export default store