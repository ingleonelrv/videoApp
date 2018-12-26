const BASE_API = 'https://yts.am/api/v2/'

class Api{
    async getSuggestions(id){
        //fetch retorna una promesa
        const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`)
        //.json() tambien retorna una promesa por eso tambien lleva await
        const { data } = await query.json()
        return data.movies
    }
    async getMovies(){
        //fetch retorna una promesa
        const query = await fetch(`${BASE_API}list_movies.json`)
        //.json() tambien retorna una promesa por eso tambien lleva await
        const { data } = await query.json()
        return data.movies
    }
}
//exporto una instancia de la clase
export default new Api