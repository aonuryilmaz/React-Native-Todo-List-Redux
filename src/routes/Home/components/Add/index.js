import React, { Component } from 'react';
import { Text } from 'react-native';
import { View, InputGroup, Input, Button,Icon,Item,Label } from 'native-base';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';


export default class Add extends Component{
    constructor(props){
        super(props);
        this.state={text:'',fail:false}
    }
    handleInput=(val)=>{
        this.setState({text:val});
    }
    onPress=()=>{
        if(this.state.text!==''){
            this.props.addTodo(this.state.text);
            this.setState({text:'',fail:false})
        }else{
            this.setState({fail:true,text:''})
        }
    }
    render(){
        return (
            <View >
                <Item floatingLabel error={this.state.fail} > 
                    <Icon name="person"/>
                    <Label>Metin Giriniz</Label>
                    <Input onChangeText={this.handleInput} />
                    {   this.state.fail&&
                        <Icon name='close-circle' />
                    }
                </Item>
                <Button full info onPress={this.onPress}>
                    <Text>Add Todo</Text>
                </Button>
            </View>
        )
    }
}
