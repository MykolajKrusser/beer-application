import * as actionTypes from './actionTypes';

export const selectBrewer = (data)=>{
    return {
        type: actionTypes.THEME_CHANGE,
        data: data
    }
};