import React from 'react'
import { ContainerCalculoImagem } from './styles'

interface IProps {
  matriz: Array<number>
  imagem: Array<number>
}

const ComponentCalculoImagem: React.FC<IProps> = ({ matriz, imagem }) => {
  return (
    <ContainerCalculoImagem>
      Componente para exibir as imagens e calcular Matriz={matriz}
      Imagem={imagem}
    </ContainerCalculoImagem>
  )
}

export default ComponentCalculoImagem
