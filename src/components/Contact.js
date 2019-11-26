import React, { Component } from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdPhoneAndroid } from 'react-icons/md'

const Container= styled.div`
  align-items: center;
  border: solid 1px black;
  background: silver;
  display: flex;
  height: 10%;
  justify-content: space-around;
  width: 95%;
`
const Text= styled.p`
  font-size: 18px;
`
const Link= styled.a`
  color: rgb(0, 196, 132);
`
class Contact extends Component {
  render() {
    return(
      <Container>
        <Text> <MdPhoneAndroid/> 626-232-1450</Text>
        <Text> <MdEmail /> Eliseo_flores530@yahoo.com</Text>
        <Text> <FaGithub />{ <Link href='https://github.com/Seo-the-platinum'> https://github.com/Seo-the-platinum </Link> }</Text>
        <Text> <FaLinkedin /> {<Link href='https://www.linkedin.com/in/eliseo-aegon-flores/'>https://www.linkedin.com/in/eliseo-aegon-flores/</Link>}</Text>
      </Container>
    )
  }
}

export default Contact
