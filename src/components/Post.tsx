import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import Avatar from './Avatar'
import FooterMenu from './FooterMenu'
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'



const Container = styled.View`
flex:1;
height: 100%;

`
const ButtonDivider = styled.View`

width:100%;
height: 9px;
background-color: #f0f2f5;
`
const Header = styled.View`
height: 50px;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 6px;
padding: 0 11px;

`
const Row = styled.View`
display: flex;
align-items: center;
flex-direction: row;

`

const User = styled.Text`
font-size: 12px;
font-weight: bold;
color:#222121;
`

const Time = styled.Text`
font-size: 9px;

color:#747476;
`
const PostText = styled.Text`
font-size:12px ;
color:#222121;
line-height: 16px;
padding: 0 11px;
`
const Photo = styled.Image`
margin-top:9px;
width:100%;
height:300px;



`

const Footer = styled.View`
padding:0 11px;

`
const FooterCount = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 9px 0;
`
const IconCount = styled.View`
background-color: #1878f3;
width: 20px;
height: 20px;
border-radius: 10px;
align-items: center;
justify-content: center;
margin-right: 6px;

`

const TextCount = styled.Text`
font-size:11px;
color:#424040;

`
const Separator = styled.View`
width:100%;
height: 1px;
background-color: #F9F9F9;

`

const Post = () => {
    return (
        <Container>
            <Header>
                <Row>
                    <Avatar source={require('../../assets/user3.jpg')} />
                    <View style={{ paddingLeft: 10 }}>
                        <User>
                            Regi P

</User>
                        <Row>
                            <Time>
                                9m
    </Time>
                            <Entypo
                                name="dot-single"
                                size={12}
                                color='#747476'
                            />
                            <Entypo
                                name="globe"
                                size={10}
                                color='#747476'
                            />
                        </Row>

                    </View>
                </Row>
                <Entypo
                    name="dots-three-horizontal"
                    size={15}
                    color='#222121'
                />
            </Header>
            <PostText>
                Facebook React Native clone Interface & styled components
            </PostText>
            <Photo source={require('../../assets/post1.jpg')}>

            </Photo>
            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign
                                name="like1"
                                size={12}
                                color="#FFF"
                            />

                        </IconCount>
                        <TextCount>84 likes</TextCount>
                    </Row>
                    <TextCount>24 comments</TextCount>
                </FooterCount>
                <Separator />
                <FooterMenu />

            </Footer>
            <ButtonDivider />
        </Container>
    )
}

export default Post
