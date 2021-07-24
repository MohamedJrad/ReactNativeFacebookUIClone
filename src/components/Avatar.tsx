import React from 'react'
import { ImageSourcePropType } from 'react-native'
import styled from 'styled-components/native'

const Container =styled.View`
width:40px;
height:40px;
position: relative;

`
const User=styled.Image`
width:40px;
height: 40px;
border-radius: 20px;

`
const UserActive=styled.View`
width:15px;
height: 15px;
border-radius: 8px;
background-color: #4bcb1f;
position:absolute ;
bottom:-2px;
right:-2px;
border-width:2px;
border-color: #FFFF;

`
interface Props{
    source:ImageSourcePropType;
    online:boolean;
}
const Avatar = ({source,online}:Props) => {
    return (
      <Container>
          <User source={source}/>
          {online  && <UserActive/>}

      </Container>
    )
}
Avatar.defaultProps={
    online:false
}
export default Avatar
