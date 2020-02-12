import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import Content from './Content';
import RightBar from './RightBar';

const MainContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 65%;
    margin: 45px auto 0 auto;
`

export default () => {
    return (
        <MainContentContainer>
            <SideBar />
            <Content />
            <RightBar />
        </MainContentContainer>
    );
}