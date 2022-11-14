import {TV_ACTION_TYPE} from './TVType'

const InitialState = {
    TV_poppular:[],
    TV_toprate:[],
    TV_onair:[]
}

export const TVReducer = (state = InitialState, { type, payload } ) => {
    switch(type) {
        case TV_ACTION_TYPE.SET_TV_POPULAR :
            return {...state, TV_poppular:payload}
        case TV_ACTION_TYPE.SET_TV_TOPRATE :
            return {...state, TV_toprate:payload}
        case TV_ACTION_TYPE.SET_TV_ONAIR :
            return {...state, TV_onair: payload}
        default:
            return state
    }
}