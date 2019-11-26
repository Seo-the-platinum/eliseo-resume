import React, { Component } from 'react'
import styled from 'styled-components'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub  } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import reduxlogo from './reduxlogo.png'


const Container= styled.div`
  background: silver;
  border: solid 1px black
  box-shadow: 5px 5px 10px grey;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 95%;
`
const Header= styled.div`
  background: rgb(0, 196, 132);
  display: flex;
  justify-content: center;
  border-bottom: solid 1px black;
  font-weight: bold;
  font-size: 24px;
  font-family: Century Gothic;
  padding-bottom: 5px;
  width: 100%;
`
const SkillsList= styled.div`
  display: flex;
  justify-content: space-around;
`
const Skill= styled.div`
  display: flex;
  align-items: center;
`
const ResizedImg= styled.img`
  max-width: 65%;
  max-height: 65%;
`
class Skills extends Component {
  render() {
    return (
      <Container>
        <Header>
          Skills
        </Header>
        <SkillsList>
          <Skill>
            <FaHtml5 size={32} color='E44D26'/>
              Html
          </Skill>
          <Skill>
            <FaCss3Alt size={32} color='#264de4'/> Css
          </Skill>
          <Skill>
            <IoLogoJavascript size={32}/> Javascript
          </Skill>
          <Skill>
            <FaReact size={32} color='61DBFB'/>React
          </Skill>
          <Skill>
            <FaReact size={32} color='61DBFB'/>React Native
          </Skill>
          <Skill>
            Redux
          </Skill>
          <Skill>
            <FaGithub size={32}/>
            Git
          </Skill>
        </SkillsList>
      </Container>
    )
  }
}

export default Skills
