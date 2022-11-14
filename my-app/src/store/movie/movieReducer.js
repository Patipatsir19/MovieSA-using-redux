import { MOVIE_ACTION_TYPE } from "./movieType";

const InitialState = {
    movies_poppular:[],
    movies_toprate:[],
    movies_upcoming:[]
}

export const movieReducer = (state = InitialState, { type, payload } ) => {
    switch(type) {
        case MOVIE_ACTION_TYPE.SET_MOVIE_POPULAR :
            return {...state, movies_poppular:payload}
        case MOVIE_ACTION_TYPE.SET_MOVIE_TOPRATE :
            return {...state, movies_toprate:payload}
        case MOVIE_ACTION_TYPE.SET_MOVIE_UPCOMING :
            return {...state, movies_upcoming: payload}
        default:
            return state
    }
}