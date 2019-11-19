import React, { Component } from 'react'
import styled  from 'styled-components'
import Header from './Header'
import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects'

const Container= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: 5px;
`
const Body= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

  class Resume extends Component {
    render() {
      return (
        <Container>
          <Header />
          <Contact />
          <Body>
            <Skills />
            <Projects />
          </Body>
        </Container>
      )
    }
  }

export default Resume
