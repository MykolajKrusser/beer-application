import * as actionsType from '../actions/actionTypes';

const initialState = {
    theme: 'light'
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionsType.THEME_CHANGE:
            let newData;
            if(state.theme === 'light'){
                newData = 'dark';
            }else{
                newData = 'light';
            };
            console.log(state.theme)
            return{
                ...state,
                theme: newData,
            };
        default :
            return state;
    }
}

export default reducer;