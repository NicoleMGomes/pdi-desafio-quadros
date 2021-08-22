import type { NextApiRequest, NextApiResponse } from 'next'
import { aplicaEfeitoImagem } from '../../../services/processamento.imagem'
import formidable from 'formidable'
import { IEfeitoResponse } from '../../../@types/processamento-imagem.types'
import Cors from 'cors'

export const config = {
  api: {
    bodyParser: false,
  },
}

const cors = Cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
})

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<IEfeitoResponse>
) => {
  await runMiddleware(req, res, cors)

  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({ uploadDir: './public/input' })
    //@ts-ignore
    form.parse(req, async (err, fields, files) => {
      //@ts-ignore
      const url = await aplicaEfeitoImagem(fields.efeito, files.files)
      res.status(200).json({ url })
    })
  }
}
