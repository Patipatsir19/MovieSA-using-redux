import {TV_ACTION_TYPE} from './TVType';

export const setTV_popular = (TV_poppular) => {
    return {
        type: TV_ACTION_TYPE.SET_TV_POPULAR,
        payload: TV_poppular
    }
}

export const setTV_toprate = (TV_toprate) => {
    return {
        type: TV_ACTION_TYPE.SET_TV_TOPRATE,
        payload: TV_toprate
    }
}

export const setTV_onair = (TV_onair) => {
    return {
        type: TV_ACTION_TYPE.SET_TV_ONAIR,
        payload: TV_onair
    }
}