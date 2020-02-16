import React, { Component } from 'react'
import styled from 'styled-components'

const Container= styled.div`
  background: rgb(227, 230, 228, .9);
  border: solid 1px black;
  box-shadow: 5px 5px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  width: 95%;
`
const Header= styled.div`
  background: rgb(0, 196, 132);
  display: flex;
  font-family: 'PT Sans Narrow', sans-serif;
  justify-content: center;
  width: 100%;
  border-bottom: solid 1px black;
  font-weight: bold;
  font-size: 24px;
  font-family: Century Gothic;
  padding-bottom: 5px;
`
const ProjectsContainer= styled.div`
  display: flex;
  justify-content: space-around;
  @media (min-width: 320px) and (max-width: 380px) {
    align-items: center;
    flex-direction: column;
  };

  @media (min-width: 381px) and (max-width: 600px) {
    align-items: center;
    flex-direction: column;  }
`

const LinkContainer= styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'PT Sans Narrow', sans-serif;
  align-items: center;
  width: 30%;
  padding-top: 10px;
  @media (min-width: 320px) and (max-width: 380px) {
    width: 85%;
  };
  @media (min-width: 381px) and (max-width: 600px) {
    width: 85%;
  };
`

const Link= styled.a`
  color: rgb(0, 196, 132);
  font-family: 'PT Sans Narrow', sans-serif;
`

class Projects extends Component {
  render() {
    return (
      <Container>
        <Header>Projects</Header>
        <ProjectsContainer>
        <LinkContainer>
          <Link href='https://seo-the-platinum.github.io/react-forum/'> React Forum </Link>
          <Link href='https://github.com/Seo-the-platinum/react-forum'> React Forum Repo</Link>
          <p>
            React Forum utilizes React, Redux, and Styled Components to allow a user to add posts to existing
            categories and comments to existing posts. Each post and comment has a score that can be increased
            or decreased. There are options to filter, edit, and delete posts and comments.
          </p>
        </LinkContainer>
        <LinkContainer>
          <Link href='https://seo-the-platinum.github.io/restaurant-review/'> Restaurant Reviews </Link>
          <Link href='https://github.com/Seo-the-platinum/restaurant-review'> Restaurant Reviews Repo </Link>
          <p>Restaurant Reviews utilizes Javascript, Html, Css, leaflet, and a service worker. Restaurants are
            retrieved and filtered based on the users selection. Each restaurant contains a picture, multiple reviews,
            and other restaurant details.</p>
        </LinkContainer>
        <LinkContainer>
          <Link href='https://snack.expo.io/@oe5i73/udaciflashcards'> Udaciflashcards </Link>
          <p>Udaciflashcards is built on React Native. The app lets the user create a deck and add cards
          to the deck. Each card has a question and an answer side. The user can take a quiz which will run through
          all the cards in a deck and return their score at the end of the quiz.</p>
        </LinkContainer>
        </ProjectsContainer>
      </Container>
    )
  }
}

export default Projects
