import React, { Component } from 'react'
import styled from 'styled-components'

const Container= styled.div`
  background: silver;
  border: solid 1px black
  box-shadow: 5px 5px 10px grey;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 80%;
`
const Header= styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: solid 1px black;
  font-weight: bold;
  font-size: 24px;
  font-family: Century Gothic;
`
const List= styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
class Skills extends Component {
  render() {
    return (
      <Container>
        <Header>
          Skills
        </Header>
          <List>
            <li>
              Html
            </li>
            <li>
              Css
            </li>
            <li>
              Javascript
            </li>
            <li>
              React
            </li>
            <li>
              React Native
            </li>
            <li>
              Redux
            </li>
            <li>
              Jsx
            </li>
            <li>
              Git
            </li>
          </List>
      </Container>
    )
  }
}

export default Skills
