import * as actionsType from '../actions/actionTypes';

const initialState = {
    data: null,
    loader: true,
    error:false,
    selectedBrewery: null
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionsType.SET_DATA:
            let newData = action.data;
            return{
                ...state,
                data: newData,
                loader: false,
                error: false,
            };
        case actionsType.FETCH_DATA_FAILED:
            return{
                ...state,
                error: true
            };
        case actionsType.SELECTED_BREWERY:
            let selected = action.data;
            return{
                ...state,
                selectedBrewery: selected
            };
        default :
            return state;
    }
}

export default reducer;