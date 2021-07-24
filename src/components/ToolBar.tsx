import React from 'react'
import styled from 'styled-components/native'
import Avatar from './Avatar'
import {Ionicons,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons'

const Container = styled.View`
width:100%;
height: 92px;


`
const Row = styled.View`
flex-direction: row;
background-color: #FFFFFF;
width:100%;
padding: 0 11px;
align-items: center;

`
const Input=styled.TextInput`
height: 50px;
width:100%;
padding: 0 12px;`


const Divider =styled.View`
width:100%;
height:1px;
background-color: #F0F0F0;

`

const Menu=styled.View`
flex:1;
flex-direction: row;
align-items: center;
justify-content: center;
height:42px;
`
const MenuText=styled.Text`
padding-left: 11px;
font-weight:bold;
font-size: 14px;


`
const Seperator=styled.View`
width:1px;
height: 26px;
background-color: #F0F0F0;
`

const ButtonDivider=styled.View`

width:100%;
height: 9px;
background-color: #f0f2f5;
`

const ToolBar = () => {
    return (
        <>
        <Container>
            <Row>
                <Avatar  source={require('../../assets/avatar.jpeg')} />
                <Input placeholder="What`s in your mind ?"/>
            </Row>
            <Divider/>
            <Row>
                <Menu>
                    <Ionicons name="ios-videocam" size={22}
                    color="#F44337"
                    />
                    <MenuText>Live</MenuText>
                </Menu>
                <Seperator/>
                <Menu>
                    <MaterialIcons
                    name="photo-size-select-actual"
                    size={22}
                    color="#4CAF50"
                    />
                    <MenuText>Photo</MenuText>
                </Menu>
                       <Seperator/>
                <Menu>
                    <MaterialCommunityIcons
                    name="video-plus"
                    size={22}
                    color="#E141FC"
                    />
                    <MenuText>Room</MenuText>
                </Menu>
            </Row>
        </Container>
        <ButtonDivider/>
        </>
    )
}

export default ToolBar
