import type { NextApiRequest, NextApiResponse } from 'next'
import os from 'os'
import { IExample } from '../../@types/example.types'

export default (req: NextApiRequest, res: NextApiResponse<IExample>) => {
  if (req.method === 'POST') {
    res.status(200).json({
      stringFromServer: `Hello 👋`,
      name: os.userInfo().username,
    })
  }
}
