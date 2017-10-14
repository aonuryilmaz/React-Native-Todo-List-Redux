import React from 'react';
import {Actions,Scene} from 'react-native-router-flux';
import HomeContainer from './Home/containers/HomeContainer';

const scene=Actions.create(
    <Scene key="root" hideNavBar >
        <Scene key="home" component={HomeContainer} title="home" initial />
    </Scene>
)

export default scene;