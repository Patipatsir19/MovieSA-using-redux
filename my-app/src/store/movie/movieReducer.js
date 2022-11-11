import { MOVIE_ACTION_TYPE } from "./movieType";

const InitialState = {
    movies: []
}

export const movieReducer = (state = InitialState, { type, payload } ) => {
    switch(type) {
        case MOVIE_ACTION_TYPE.SET_MOVIE :
            return {...state, movies: payload}
        case MOVIE_ACTION_TYPE.SEARCH_MOVIE :
            return state
        default:
            return state
    }
}