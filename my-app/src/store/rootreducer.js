import { combineReducers } from 'redux';
import { movieReducer } from './movie/movieReducer';

const rootreducer = combineReducers({
    movies: movieReducer,

})

export default rootreducer;