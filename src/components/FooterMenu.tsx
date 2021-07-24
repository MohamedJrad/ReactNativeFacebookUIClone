
import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import Avatar from './Avatar'
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'


const Container = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 9px 0;
`

const Button = styled.TouchableOpacity`
flex-direction: row;

`
const Icon = styled.View`

margin-right:6px;

`
const Text = styled.Text`
font-size: 12px;
color: #424040;
`
const FooterMenu = () => {
    return (
        <Container>
            <Button>
                <Icon>
                    <AntDesign
                        name="like2"
                        size={20}
                        color="#424040"
                    />
                </Icon>
                <Text>Like</Text>
            </Button>
            <Button>
                <Icon>
                    <MaterialCommunityIcons
                        name="comment-outline"
                        size={20}
                        color="#424040"
                    />
                </Icon>
                <Text>Comment</Text>
            </Button>
            <Button>
                <Icon>
                    <MaterialCommunityIcons
                        name="share-outline"
                        size={20}
                        color="#424040"
                    />
                </Icon>
                <Text>Share</Text>
            </Button>
        </Container>
    )
}


export default FooterMenu