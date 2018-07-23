import React, { Component } from 'react'
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst, Stack,Tabs , Drawer } from 'react-native-router-flux'
import {Text} from 'react-native'
import { Icon} from 'react-native-elements'
import CustomRouter from '../components/CustomRouter/index'

import ContactDetail from '../components/ContactDetail/index'
import ContactsPage from '../pages/ContactsPage/containers/contactPageContainer'
import EditContact from '../components/EditContact/index'





export default () => (
    <CustomRouter>
        <Scene key="root" {...sceneConfig} hideNavBar={true} style={{backgroundColor: 'white'}} >
            <Scene key="main" {...sceneConfig} initial cardStyle={{backgroundColor: 'white'}} component={ContactsPage} title="main" />
            <Scene key="detail" {...sceneConfig}  cardStyle={{backgroundColor: 'white'}} component={ContactDetail} title="main" />
            <Scene key="edit" {...sceneConfig}  cardStyle={{backgroundColor: 'white'}} component={EditContact} title="main" />
        </Scene>
</CustomRouter>
)

var sceneConfig = {
    cardStyle: {
        backgroundColor: 'white'
    },
    labelStyle: {
        fontFamily: 'open-sans',
    },
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
}


