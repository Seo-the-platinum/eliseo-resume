import React, { Component } from 'react'
import styled from 'styled-components'

const Container= styled.div`
  background: silver;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 50%;
  width: 45%;
`
const Header= styled.h2`
  background: rgb(0, 196, 132);
  border: solid 1px black;
  display: flex;
  font-family: Century Gothic;
  justify-content: center;
  margin-top: 0;
  width: 100%;
`
const WorkList= styled.div`
  display: flex;
  flex-direction: column;
`
const WorkExp= styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  align-items: center;

`
const WorkTitle= styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`
class WorkHistory extends Component {
  render() {
    return(
      <Container>
        <Header>
          Work History
        </Header>
        <WorkList>
          <WorkExp>
            <h2>
              AT&T
            </h2>
              <p>June 2013- Present</p>
          </WorkExp>
          <WorkTitle>
            <h3>
              Premises Technician
            </h3>
            <p>
              Installed and repaired internet, television, and phone services. Worked with
              cat5, coax, and fiber optic wiring.
            </p>
          </WorkTitle>
        </WorkList>
      </Container>
    )
  }
}

export default WorkHistory
