import React,{Component} from 'react';
import { Header, Left,Body,Right ,Button,Title,Icon} from 'native-base';
import { Text } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

import styles from './HeaderStyles';
export const HeaderComponent = () => {
    return (
        <Header>
            <Left>
                <Button transparent>
                  <FontAwesome name='arrow-left' size={15}/>                   
                </Button>
            </Left>
            <Body style={styles.HeaderBody} >
                <Title style={styles.HeaderTitle}>Onur Todo</Title>
            </Body>
            <Right>
                <Button transparent>
                <FontAwesome name='arrow-right' size={15}/>    
                </Button>
            </Right>
        </Header>
    )
}

export default HeaderComponent;