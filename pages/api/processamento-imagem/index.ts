import type { NextApiRequest, NextApiResponse } from 'next'
import os from 'os'
import { IExample } from '../../../@types/example.types'
import { aplicaEfeitoImagem } from '../../../services/processamento.imagem'

export default (req: NextApiRequest, res: NextApiResponse<IExample>) => {
  if (req.method === 'POST') {
    //pega os valores do body
    const efeito: string = JSON.stringify(req.body.efeito)
    const url: string = JSON.stringify(req.body.url)

    //print da url que recebeu
    console.log(url)

    //chama o méodo da service
    aplicaEfeitoImagem(efeito, url)

    //TODO: ajustar retorno
    res.status(200).json({
      stringFromServer: `Hello 👋`,
      name: os.userInfo().username,
    })
  }
}
