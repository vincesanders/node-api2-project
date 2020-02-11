import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faUserFriends, faBell, faQuestionCircle, faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    width: 100%;
    color: white;
    background-color: #385898;
    font-size: 14px;
    font-weight: bold;
    position: fixed;
    .nav-contents-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 65%;
        .nav-icon {
            color: rgba(0,0,0,0.6);
            font-size: 20px;
            cursor: pointer;
            &:hover {
                color: rgba(0,0,0,0.9);
            }
        }
        a {
            color: white;
            text-decoration: none;
            padding: 4px 10px;
            &:hover {
                background-color: #1D3C78;
            }
        }
    }
`

const SearchDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .facebook-icon {
        cursor: pointer;
        font-size: 30px;
    }
    form {
        display: flex;
        margin-left: 6px;
        input {
            height: 20px;
            font-size: 14px;
            width: 450px;
            padding-left: 5px;
        }
        button {
            float: left;
            margin-left: -50px;
            width: 50px;
            font-size: 14px;
            color: rgb(120,120,120);
            background-color: rgba(210,210,210,0.3);
            border: none;
        }
    }
`

const Profilelink = styled.a`
    display: flex;
    align-items: center;
    img {
        height: 26px;
        width: 26px;
        border-radius: 50%;
        margin-right: 5px;
    }
`

export default () => {
    return (
        <Nav>
            <div className='nav-contents-container'>
                <SearchDiv>
                    <Icon className='facebook-icon' icon={faFacebookSquare} />
                    <form>
                        <input placeholder='Search' />
                        <button><Icon icon={faSearch} /></button>
                    </form>
                </SearchDiv>
                <Profilelink href='#' ><img src={require('../assets/vince-profile.png')} />Vincent</Profilelink>
                <a href='#'>Home</a>
                <a href='#'>Find friends</a>
                <a href='#'>Create</a>
                <Icon className='nav-icon' icon={faUserFriends} />
                <Icon className='nav-icon' icon={faFacebookMessenger} />
                <Icon className='nav-icon' icon={faBell} />
                <Icon className='nav-icon' icon={faQuestionCircle} />
                <Icon className='nav-icon' icon={faCaretDown} />
            </div>
        </Nav>
    );
}