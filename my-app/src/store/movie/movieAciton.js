import { MOVIE_ACTION_TYPE } from "./movieType"

export const setMovie = (movies) => {
    return {
        type: MOVIE_ACTION_TYPE.SET_MOVIE,
        payload: movies
    }
}

export const searchMovie = (movies) => {
    return {
        type: MOVIE_ACTION_TYPE.SEARCH_MOVIE,
        payload: movies
    }
}