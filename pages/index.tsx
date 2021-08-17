import Head from 'next/head'
import ComponentCalculoImagem from '../components/ComponentCalculoImagem'
import ComponentExample from '../components/ComponentExample'

const IndexPage: React.FC = () => (
  <main>
    <Head>
      <title>Desafio dos Quadros</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ComponentExample />
    <ComponentCalculoImagem
      matriz={[1, 2, 3]}
      imagem={[3, 2, 1]}
    ></ComponentCalculoImagem>
  </main>
)

export default IndexPage
