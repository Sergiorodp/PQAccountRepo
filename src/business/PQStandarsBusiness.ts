import puc from '@app/utils/PUC/puc.json'

import { type Request, type Response } from 'express'

// #region GET PUC BY CODE
function getPucByCode (req: Request, res: Response): void {
  const { code = '' } = req.body
  res.send(puc.filter(p => {
    return p.Codigo.startsWith(code)
  }))
}
// #endregion

// #region healthCheck
function healthCheck (_: Request, res: Response): void {
  res.send({
    responde: 'PUC API IS WORKING'
  })
}
// #endregion

export default {
  getPucByCode,
  healthCheck
}
