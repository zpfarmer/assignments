//   list/TweetPreview.js
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DeleteTweet from './DeleteTweet'
//import NewTweet from './NewTweet'

const Container = styled.div`
    width: 400px;
    height: 140px;
    background: ${props => props.background};
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
    font-size: ${props => props.fontSize};
    border-radius: ${props => props.borderRadius}
    margin: 30px;
    padding: 20px;
    overflow: hidden;
`

const DetailsSpan = styled.span`
    :hover {
        color: red;
    }
`

function TweetPreview({ id, details, authorName, time, ...rest }) {
    return (
        <Container {...rest}>
            <div onClick={DeleteTweet}>X</div>
            <div>{details}</div>
            <div>{authorName}</div>
            <div>
                <Link to={`/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <DetailsSpan>{time}</DetailsSpan>
                </Link>
            </div>
        </Container>
    )
}

export default TweetPreview;