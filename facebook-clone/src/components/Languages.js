import React from 'react';
import styled from 'styled-components';

const LanguagesContainer = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    div {
        text-align: left;
        font-size: 14px;
        width: 85%;
    }
    button {
        cursor: pointer;
        font-size: 20px;
        height: 30px;
        width: 35px;
        border: 1px solid #666;
        &:hover {
            background-color: #ddd;
        }
    }
`

export default () => {
    return (
        <LanguagesContainer>
            <div>
                <a>English (US) · </a>
                <a href='#'>日本語 · </a>
                <a href='#'>Español · </a>
                <a href='#'>Português (Brasil) · </a>
                <a href='#'>Français (France)</a>
            </div>
            <button>+</button>
        </LanguagesContainer>
    );
}