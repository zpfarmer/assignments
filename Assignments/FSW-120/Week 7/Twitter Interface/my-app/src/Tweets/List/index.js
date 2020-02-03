//   list/index.js
import React from 'react'
import styled from 'styled-components'

import TweetPreview from './TweetPreview'

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px;
    padding: 30px
`

function List() {
    return (
        <Container>
            <TweetPreview
                fontSize='15px'
                textAlign='right'
                time='01/31/2020'
                authorName='Zach Farmer'
                details='This project is actually really hard!'
                background='lightcoral'
                color='black'
                id='1' />
            <TweetPreview
                fontSize='15px'
                textAlign='left'
                time='01/24/2020'
                authorName='Jack Smith'
                details='Will we ever get to the end?'
                background='lightblue'
                color='black'
                id='2' />
            <TweetPreview
                fontSize='15px'
                textAlign='right'
                time='01/20/2020'
                authorName='Justin Evans'
                details='What classes are coming up next?'
                background='lightgreen'
                color='black'
                id='3' />
            <TweetPreview
                fontSize='15px'
                time='01/10/2020'
                authorName='Brittney Adams'
                details='I really need to figure out what chores I need to get done today'
                background='lightgrey'
                color='black'
                id='4' />
            <TweetPreview
                fontSize='15px'
                textAlign='right'
                time='01/05/2020'
                authorName='Ashley Cheshier'
                details='This project is actually really hard!'
                background='lightcoral'
                color='black'
                id='5' />
            <TweetPreview
                fontSize='15px'
                textAlign='left'
                time='01/01/2020'
                authorName='Ashley Cheshier'
                details='This project is actually really hard!'
                background='lightblue'
                color='black'
                id='5' />
        </Container>
    )
}

export default List;