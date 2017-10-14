import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

export const FooterComponent = ({ filter,setVisibilityFilter }) => {

  return (
    <Footer>
      <FooterTab>
        <Button active={filter==='SHOW_ALL'} onPress={() => { setVisibilityFilter('SHOW_ALL') }}>
          <Text>Show All</Text>
          <Icon name="apps" />
        </Button>
        <Button active={filter==='COMPLETED'} onPress={() => { setVisibilityFilter('COMPLETED')}}>
          <Text>Completed</Text>
          <Icon name="ios-build" />
        </Button>
        <Button active={filter==='ACTIVE'} onPress={() => { setVisibilityFilter('ACTIVE') }}>
          <Text>Active</Text>
          <Icon name="ios-bulb-outline" />
        </Button>
      </FooterTab>
    </Footer>
  )
}
export default FooterComponent;