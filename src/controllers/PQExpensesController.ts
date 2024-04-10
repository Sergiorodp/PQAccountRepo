import { type Request, type Response } from 'express'
import { HTTPCODES } from '@app/utils/httpCodes'
import PQExpensesBusiness from '@app/business/PQExpensesBusiness'

console.log('[[ EXPENSES LOADED ]]')

function getPQExpensesControllerV1 (req: Request, res: Response): void {
  // TODO finish controller logic
  try {
    PQExpensesBusiness.getPQExpensesBusinessV1(req)
  } catch (e) {
    res.status(HTTPCODES.SERVER_ERROR).send(e)
  }
  res.status(HTTPCODES.OK).send('[[ GET PQ EXPENSES ]]')
}

export default {
  getPQExpensesControllerV1
}
