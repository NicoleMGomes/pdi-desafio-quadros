import { GetStaticProps } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { IExample } from '../@types/example.types'
import ComponentExample from '../components/ComponentExample'
import { api } from '../services/api'

const Title = styled.h1`
  color: var(--secondary);
  text-align: center;
  font-size: 50px;
`

const IndexPage: React.FC<IExample> = ({ stringFromServer, name }) => (
  <main>
    <Head>
      <title>Template Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>{stringFromServer}</Title>
    <ComponentExample name={name} />
  </main>
)

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const { data: dataFromServer } = await api.get<IExample>('/example')

  return {
    props: {
      ...dataFromServer,
    },
  }
}
