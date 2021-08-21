import Head from 'next/head'
import ComponentExample from '../components/ComponentExample'

const IndexPage: React.FC = () => (
  <main>
    <Head>
      <title>Desafio dos Quadros</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ComponentExample />
  </main>
)

export default IndexPage
