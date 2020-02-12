import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 18%;
    text-align: left;
    a {
        width: 100%;
        text-decoration: none;
        color: #666;
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        &:hover {
            background-color: #F2F3F5;
        }
        img {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            border: 1px solid #666;
            margin-right: 6px;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        a {
            margin: 1px 0;
            width: 100%;
            text-decoration: none;
            color: #666;
            &:hover {
                background-color: #F2F3F5;
            }
            span {
                background-size: auto;
                background-repeat: no-repeat;
                height: 20px;
                width: 20px;
                margin-right: 6px;
            }
            .nav-icon {
                margin-right: 16px;
            }
        }
        h3 {
            width: 100%;
            color: #666;
            margin-bottom: 0;
        }
    }
`

export default () => {
    return (
        <SideBarContainer>
            <a href='#'><img src={require('../assets/vince-profile.png')} />Vincent Sanders</a>
            <div>
                <a href='#'><span className='news-feed-icon'></span>News Feed</a>
                <a href='#'><span className='messenger-icon'></span>Messenger</a>
                <a href='#'><span className='watch-icon'></span>Watch</a>
                <a href='#'><span className='marketplace-icon'></span>Marketplace</a>
            </div>
            <div>
                <h3>Shortcuts</h3>
                <a href='#'><span className='group-icon'></span>Fat Camp</a>
                <a href='#'><span className='tent-icon'></span>Canoe crew</a>
                <a href='#'><span className='book-icon'></span>The Runes</a>
                <a href='#'><span className='group-icon'></span>Pokemon Go KC</a>
                <a href='#'><span className='guild-icon'></span>Adeventurers Guild</a>
                <a href='#'><Icon className='nav-icon' icon={faCaretDown} />See More</a>
            </div>
            <div>
                <h3>Explore</h3>
                <a href='#'><span className='pages-icon'></span>Pages</a>
                <a href='#'><span className='groups-icon'></span>Groups</a>
                <a href='#'><span className='events-icon'></span>Events</a>
                <a href='#'><span className='fundraisers-icon'></span>Fundraisers</a>
                <a href='#'><span className='friendlists-icon'></span>Friend lists</a>
                <a href='#'><Icon className='nav-icon' icon={faCaretDown} />see More</a>
            </div>
        </SideBarContainer>
    );
}