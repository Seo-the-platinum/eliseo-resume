import React, { Component } from 'react'
import styled from 'styled-components'

const Container= styled.div`
  background: silver;
  border: solid 1px black;
  display: flex;
  justify-content: center;
  margin-top: 10px;
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
class Projects extends Component {
  render() {
    return (
      <Container>
        <Header>Projects</Header>
      </Container>
    )
  }
}

export default Projects
