import update from 'react-addons-update';
import constants from './actionConstants';
const {
    ADD_TODO,
    TOGGLE_TODO
} =constants
//---------------------
//Actions
//---------------------
let nextTodoId=0;

export function addTodo(payload){
    return (dispatch)=>{
        dispatch({
            type:ADD_TODO,
            id:nextTodoId++,
            payload
        })
    }
}

export function toggleTodo(id){
    return (dispatch)=>{
        dispatch({
            type:TOGGLE_TODO,
            id
        })
    }
}

//---------------------
//Handlers
//---------------------
/*
 [
        ...state,
        {
          id: action.id,
          text: action.payload,
          completed: false
        }
      ]
*/

function handleAddTodo(state,action){
    return update(state,{
        $push:[{id:action.id,text:action.payload,completed:false}]
    })
    
}


function handleToggleTodo(state,action){
    return state.map(todo =>
        (todo.id === action.id) 
          ? update(todo,{completed:{
              $set:!todo.completed
          }})
          : todo
      )
}

const ACTION_HANDLERS={
    ADD_TODO:handleAddTodo,
    TOGGLE_TODO:handleToggleTodo
}

const initialState=[];
export function HomeReducer(state=initialState,action){
    const handler=ACTION_HANDLERS[action.type];

    return handler ? handler(state,action):state;
}