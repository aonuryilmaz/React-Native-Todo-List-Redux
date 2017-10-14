import React, { Component } from 'react';
import { Container, Content,Item,Button,Icon,Input,View,Text } from 'native-base';
import Add from './Add';
import Listele from './Listele';
import Header from '../../../components/HeaderComponent';
import Footer from '../../../components/FooterComponent';


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: props.todos        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.filter === 'SHOW_ALL') {
            this.setState({ todos: nextProps.todos })
        }
        if (nextProps.filter === 'COMPLETED') {
            this.setState({ todos: nextProps.todos.filter(t => t.completed) })
        } if (nextProps.filter === 'ACTIVE') {
            this.setState({ todos: nextProps.todos.filter(t => !t.completed) })
        }

    }
    render() {
        const todos = this.props.todos
        return (
            <Container >
                <Header />
                <Content>
                   <Add addTodo={this.props.addTodo}/>
                  
                    <Listele toggleTodo={this.props.toggleTodo} todos={this.state.todos} />
                </Content>
                <Footer filter={this.props.filter} setVisibilityFilter={this.props.setVisibilityFilter} />
            </Container>
        )
    }
}