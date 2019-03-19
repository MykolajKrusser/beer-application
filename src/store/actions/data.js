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
        axios.get('http://ontariobeerapi.ca/products/')
        .then(respons=>{
            dispatch(setData(respons))
        })
        .catch(error=>{
            dispatch(fetchDataFailed())
        });
    }
}