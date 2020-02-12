import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    text-align: left;
    font-size: 14px;
    margin: 12px 0;
    p {
        margin: 0;
        a {
            text-decoration: none;
            color: #999;
            &:hover {
                text-decoration: underline;
            }
            .addchoices-icon {
                display: inline-block;
                background-size: auto;
                background-repeat: no-repeat;
                height: 14px;
                width: 14px;
                margin-left: 2px;
            }
        }
    }
`

export default () => {
    return (
        <FooterContainer>
            <p>
                <a href='#'>Privacy</a>
                <span> · </span>
                <a href='#'>Terms</a>
                <span> · </span>
                <a href='#'>Advertising</a>
                <span> · </span>
                <a href='#'>Ad Choices<span className='addchoices-icon'></span></a>
                <span> · </span>
                <a href='#'>Cookies</a>
                <span> · </span>
                <a href='#'>More</a>
            </p>
            <p>Facebook © 2020</p>
        </FooterContainer>
    );
}