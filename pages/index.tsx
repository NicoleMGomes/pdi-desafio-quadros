import Head from 'next/head'
import styled from 'styled-components'
import ComponentButtonMenu from '../components/ComponentButtonMenu'
import ComponentMenu from '../components/ComponentMenu'
import ComponentCalculoImagem from '../components/ComponentCalculoImagem'

const Title = styled.h1`
  color: var(--secondary);
  text-align: center;
  font-size: 35px;
  margin-top: 20px;
`

const IndexPage: React.FC = () => (
  <main>
    <Head>
      <title>Desafio dos Quadros</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>PDI Desafio dos Quadros</Title>

    <ComponentMenu>
      <ComponentButtonMenu name="Espelhamento vertical" />
      <ComponentButtonMenu name="Espelhamento horizonal" />
      <ComponentButtonMenu name="Deslocamento horizonal" />
      <ComponentButtonMenu name="Redimensionamento" />
      <ComponentButtonMenu name="Rotacionamento" />
    </ComponentMenu>

    <ComponentCalculoImagem
      matriz={[1, 2, 3]}
      imagem={[3, 2, 1]}
    ></ComponentCalculoImagem>
  </main>
)

export default IndexPage
