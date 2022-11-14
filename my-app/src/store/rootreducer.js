import { combineReducers } from 'redux';
import { movieReducer } from './movie/movieReducer';
import {TVReducer} from './TV/TVReducer'

const rootreducer = combineReducers({
    movies: movieReducer,
    TV: TVReducer
})

export default rootreducer