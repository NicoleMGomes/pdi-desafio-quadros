import type { NextApiRequest, NextApiResponse } from 'next'
import { aplicaEfeitoImagem } from '../../../services/processamento.imagem'
import formidable from 'formidable'
import { IEfeitoResponse } from '../../../@types/processamento-imagem.types'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<IEfeitoResponse>
) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm()
    //@ts-ignore
    form.parse(req, async (err, fields, files) => {
      //@ts-ignore
      const url = await aplicaEfeitoImagem(fields.efeito, files.files)
      res.status(200).json({ url })
    })
  }
}
