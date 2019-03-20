import * as actionsType from '../actions/actionTypes';

const initialState = {
    data: null,
    loader: true,
    error:false,
    selectedBrewer: null,
    selectedBrewer2: null,
    selectedBrewer3: null
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
        case actionsType.SELECTED_BREWER2:
            let selected2 = action.data;
            return{
                ...state,
                selectedBrewer2: selected2
            };
        case actionsType.SELECTED_BREWER3:
            let selected3 = action.data;
            return{
                ...state,
                selectedBrewer3: selected3
            };
        default :
            return state;
    }
}

export default reducer;