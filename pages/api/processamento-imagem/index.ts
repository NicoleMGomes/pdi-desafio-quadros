import type { NextApiRequest, NextApiResponse } from 'next'
import { aplicaEfeitoImagem } from '../../../services/processamento.imagem'
import formidable from 'formidable'
import { IEfeitoResponse } from '../../../@types/processamento-imagem.types'
import Cors from 'cors'
import runMidleware from '../../../services/runMidleware'
import formidableMidleware from '../../../services/formidableMidleware'

export const config = {
  api: {
    bodyParser: false,
  },
}

const cors = Cors()

export default async (
  req: NextApiRequest,
  res: NextApiResponse<IEfeitoResponse>
) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  await runMidleware(req, res, cors)

  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({ uploadDir: './public/input' })
    const { fields, files } = await formidableMidleware(req, form)
    const url = await aplicaEfeitoImagem(fields.efeito, files)
    res.status(200).json({ url })
  }
}
