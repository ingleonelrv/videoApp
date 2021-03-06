function videos(state={}, action){
    switch (action.type) {
        case 'SET_CATEGORY_LIST':{
            //copio lo que habia en state y lo junto con lo que me viene en payload y surge un state nuevo
            //con los keys de payload, es decir: return {categoryList:[{},{},{}]}
            return { ...state, ...action.payload}
        }
        case 'SET_SUGGESTION_LIST':{
            return { ...state, ...action.payload}
        }
        case 'SET_SELECTED_MOVIE':{
            return { ...state, selectedMovie: action.payload.movie}
        }
        case 'SET_USER':{
            return {...action.payload}
        }
        case 'REMOVE_USER':{
            //no puedo retornar false xq mi estado inicial retorna objeto, aunq esto friega la persistencia
            return {}
        }
        default:
            return state      
    }
}
export default videos