import React from 'react'
import { ContainerButtonMenu } from './styles'

interface IProps {
  name: string
}

const ComponentButtonMenu: React.FC<IProps> = ({ name }) => {
  return (
    <ContainerButtonMenu>
      <div>{name}</div>
    </ContainerButtonMenu>
  )
}

export default ComponentButtonMenu
