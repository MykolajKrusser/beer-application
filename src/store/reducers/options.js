import * as actionsType from '../actions/actionTypes';

const initialState = {
    theme: 'light',
    limitStep: 15,
    sortByProp: 'name'
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionsType.THEME_CHANGE:
            let newData;
            if(state.theme === 'light'){
                newData = 'dark';
                localStorage.setItem('theme', 'dark');
            }else{
                newData = 'light';
                localStorage.setItem('theme', 'light');
            };
            return{
                ...state,
                theme: newData
            };
        case actionsType.LIMIT_CHANGE:
            return{
                ...state,
                limitStep: Number(action.event.target.value)
            };
        case actionsType.SORT_CHANGE:
            localStorage.setItem('sortByProp', action.event);
            return{
                ...state,
                sortByProp: action.event
            };
        default :
            return state;
    }
}

export default reducer;