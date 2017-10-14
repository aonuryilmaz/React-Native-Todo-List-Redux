import constant from './constants';
import update from 'react-addons-update'
const { SET_VISIBILITY_FILTER }=constant

//--------------
//Actions
//---------------
export function setVisibilityFilter(filter){
    return (dispatch)=>{
        dispatch({
            type:SET_VISIBILITY_FILTER,
            filter
        })
    }
}

//--------------
//Handlers
//---------------

function handleVisibilityFilter(state,action){
    return update(state,{
        $set:action.filter
    })
}

const ACTION_HANDLERS={
    SET_VISIBILITY_FILTER:handleVisibilityFilter,
}

const initialState='SHOW_ALL';
export function VisibilityReducer(state=initialState,action){
    const handler=ACTION_HANDLERS[action.type];

    return handler ? handler(state,action):state;
}