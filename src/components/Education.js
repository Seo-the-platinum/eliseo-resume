import React, { Component } from 'react'
import styled from 'styled-components'

const Container= styled.div`
  align-items: center;
  background: silver;
  border: solid 1px black;
  box-shadow: 10px 10px 20px gray;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 45%;
`
const Header= styled.h2`
  background: rgb(0, 196, 132);
  border: solid 1px black;
  display: flex;
  justify-content: center;
  margin-top: 0;
  width: 100%;
`
const EduList= styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const EduItem= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;
`
const Degree= styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  `
class Education extends Component {
  render() {
    return (
      <Container>
        <Header> Education </Header>
        <EduList>
          <EduItem>
            <h3>
              Udacity
            </h3>
            <p>
              May 2019- September 2019
            </p>
            <p>
              React NanoDegree
            </p>
          </EduItem>
          <EduItem>
            <h3>
              Udacity
            </h3>
            <p>
              January 2018- April 2019
            </p>
            <p>
              Front-End Web Developer NanoDegree
            </p>
          </EduItem>
          <EduItem>
            <h3>
              Alhambra High School
            </h3>
              <p>
                 2003- 2007
              </p>
              <p> High School Diploma </p>
          </EduItem>
        </EduList>
      </Container>
    )
  }
}

export default Education
