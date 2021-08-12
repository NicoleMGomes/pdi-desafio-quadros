import Head from 'next/head'
import styled from 'styled-components'
import ComponentExample from '../components/ComponentExample'

const Title = styled.h1`
  color: var(--secondary);
  text-align: center;
  font-size: 50px;
`

const IndexPage: React.FC = () => (
  <main>
    <Head>
      <title>Template Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>PDI Desafio dos Quadros</Title>
    <ComponentExample name="Test" />
  </main>
)

export default IndexPage
