import { Router } from 'express'
import pucBusiness from '@app/business/PQStandarsBusiness'

const router = Router()

console.log('[[ PUC ]]')

router.get('/health', pucBusiness.healthCheck)
router.get('/', pucBusiness.getPucByCode)

export default router
