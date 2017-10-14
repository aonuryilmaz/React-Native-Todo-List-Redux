import {connect} from 'react-redux';
import Home from '../components/Home';
import {addTodo,toggleTodo} from '../module/home';
import {setVisibilityFilter} from '../../Visibility';


const mapStateToProps=(state)=>({
    todos:state.home || {},
    filter:state.visibility
});

const mapActionCreators={
    addTodo,
    toggleTodo,
    setVisibilityFilter
}
export default connect(mapStateToProps,mapActionCreators)(Home);