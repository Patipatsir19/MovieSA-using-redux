import { MOVIE_ACTION_TYPE } from "./movieType"

export const setMovie_popular = (movies_poppular) => {
    return {
        type: MOVIE_ACTION_TYPE.SET_MOVIE_POPULAR,
        payload: movies_poppular
    }
}

export const setMovie_toprate = (movies_toprate) => {
    return {
        type: MOVIE_ACTION_TYPE.SET_MOVIE_TOPRATE,
        payload: movies_toprate
    }
}

export const setMovie_upcoming = (movies_upcoming) => {
    return {
        type: MOVIE_ACTION_TYPE.SET_MOVIE_TOPRATE,
        payload: movies_upcoming
    }
}

export const searchMovie = (movie) => {
    return {
        type: MOVIE_ACTION_TYPE.SEARCH_MOVIE,
        payload: movie
    }
}