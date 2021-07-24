import React from 'react';
import { StatusBar, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import AppBar from './components/AppBar';
import ToolBar from './components/ToolBar';
import Users from './components/Users';
import Story from './components/Story'
import Feed from './components/Feed'
const Container = styled.SafeAreaView`
flex:1;
`;

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />

      <Container>
        <ScrollView >
          <AppBar />
          <ToolBar />
          <Users />
          <Story />
          <Feed />
        </ScrollView>
      </Container>
    </>
  );
}
