import {combineReducers} from 'redux';
import {HomeReducer as home} from '../routes/Home/module/home'
import {VisibilityReducer as visibility} from '../routes/Visibility'
const makeRootReducer=()=>{
    return combineReducers({
        home,
        visibility
    });
}

export default makeRootReducer;