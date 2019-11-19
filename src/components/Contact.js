import React, { Component } from 'react'
import styled from 'styled-components'

const Container= styled.div`
  border: solid 1px black;
  background: silver;
  display: flex;
  height: 15%;
  justify-content: space-around;
  width: 95%;
  
`
const Text= styled.p`
  font-size: 14px;
`
const Link= styled.a`
  color: rgb(0, 196, 132);
`
class Contact extends Component {
  render() {
    return(
      <Container>
        <Text>Phone: 626-232-1450</Text>
        <Text>Email: Eliseo_flore530@yahoo.com</Text>
        <Text>Github: { <Link href='https://github.com/Seo-the-platinum'> https://github.com/Seo-the-platinum </Link> }</Text>
      </Container>
    )
  }
}

export default Contact
