import * as actionsType from '../actions/actionTypes';

const initialState = {
    data: null,
    loader: true,
    error:false,
    selectedBrewer: null,
    sortedBeers: null
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
        case actionsType.SELECTED_BREWER:
            let selected = action.data;
            return{
                ...state,
                selectedBrewer: selected
            };
        default :
            return state;
    }
}

export default reducer;