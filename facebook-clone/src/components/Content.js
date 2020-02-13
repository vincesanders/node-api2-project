import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
`

export default () => {
    return (
        <ContentContainer>
            This is Content.
        </ContentContainer>
    );
}