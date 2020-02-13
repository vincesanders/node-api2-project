import React from 'react';
import styled from 'styled-components';
import YourPage from './YourPage';
import RecentListings from './RecentListings';
import Languages from './Languages';
import Footer from './Footer';

const RightBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 28%;
`

const EmptyDiv = styled.div`
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin: 12px 0;
`

export default () => {
    return (
        <RightBarContainer>
            This is RightBar.
            <YourPage />
            <RecentListings />
            <EmptyDiv />
            <Languages />
            <Footer />
        </RightBarContainer>
    );
}