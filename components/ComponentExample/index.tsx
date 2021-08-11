import React from 'react'
import { Container } from './styles'

interface IProps {
  name: string
}
const ComponentExample: React.FC<IProps> = ({ name }) => {
  return (
    <Container>
      <h2>Welcome {name}</h2>
    </Container>
  )
}

export default ComponentExample
