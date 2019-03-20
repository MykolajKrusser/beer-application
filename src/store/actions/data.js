import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setData = (data)=>{
    return {
        type: actionTypes.SET_DATA,
        data: data
    }
}
/*
export const setLocalData = (data)=>{
    return {
        type: actionTypes.SET_LOCAL_DATA,
        data: data
    }
}
*/
export const fetchDataFailed = ()=>{
    return {
        type: actionTypes.FETCH_DATA_FAILED
    }
}

export const initData = ()=>{
    return dispatch=>{
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}http://ontariobeerapi.ca/products/`)
        .then(respons=>{
            dispatch(setData(respons.data))
        })
        .catch(error=>{
            dispatch(fetchDataFailed())
        });
    }
}


export const selectBrewer = (data)=>{
    return {
        type: actionTypes.SELECTED_BREWER,
        data: data
    }
};

export const selectBrewer2 = (data)=>{
    return {
        type: actionTypes.SELECTED_BREWER2,
        data: data
    }
};

export const selectBrewer3 = (data)=>{
    return {
        type: actionTypes.SELECTED_BREWER3,
        data: data
    }
};